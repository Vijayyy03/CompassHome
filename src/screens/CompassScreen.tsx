import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, Easing } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { useCompass } from '../hooks/useCompass';
import { CompassFace } from '../components/CompassFace';
import { Needle } from '../components/Needle';
import { Dropdown } from '../components/UI/Dropdown';
import { ZONES_16, ZONES_32 } from '../constants/vastuData';

const { width } = Dimensions.get('window');
const COMPASS_SIZE = width * 0.9;

type Mode = 'NORMAL' | 'VASTU_16' | 'VASTU_32' | 'CHAKRA';

export const CompassScreen = () => {
    const { heading, sensorAvailable } = useCompass();
    const [mode, setMode] = useState<Mode>('NORMAL');

    // Animation values
    const rotation = useSharedValue(0);
    const needleRotation = useSharedValue(0);

    useEffect(() => {
        // Update animations based on mode
        // We use -heading because if we face East (90), North is to our Left (-90).

        if (mode === 'NORMAL') {
            // Normal: Dial fixed at 0, Needle rotates to point North
            // Actually, if I face East, Needle (N tip) points Left (-90).
            // So needleRotation = -heading.
            needleRotation.value = withTiming(-heading, { duration: 100, easing: Easing.linear });
            rotation.value = withTiming(0, { duration: 300 });
        } else {
            // Vastu: Dial rotates to align with world. Needle (Indicator) is fixed at top.
            // If I face East (90), "E" on dial (at 90 deg) should be at Top (0 deg).
            // So we rotate dial by -90.
            rotation.value = withTiming(-heading, { duration: 100, easing: Easing.linear });
            needleRotation.value = withTiming(0, { duration: 300 });
        }
    }, [heading, mode]);

    // Haptics on zone change (optional, simplified for now)
    // We could track previous zone and trigger haptic if it changes.

    const animatedDialStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    const animatedNeedleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${needleRotation.value}deg` }],
        };
    });

    const getDirectionLabel = (deg: number) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(deg / 45) % 8;
        return directions[index];
    };

    const getCurrentZone = () => {
        // Normalize heading to 0-360
        let h = heading;
        if (h < 0) h += 360;

        // Find zone
        const zones = mode === 'VASTU_32' ? ZONES_32 : ZONES_16;
        // Note: ZONES_16 and 32 cover the circle.
        // We need to handle the wrap-around for North (e.g. 350 to 10).
        // Our data structure has start/end.
        // Special case: start > end (crossing 0).

        const zone = zones.find(z => {
            if (z.startDegree > z.endDegree) {
                return h >= z.startDegree || h <= z.endDegree;
            }
            return h >= z.startDegree && h <= z.endDegree;
        });

        return zone;
    };

    const currentZone = getCurrentZone();

    return (
        <LinearGradient
            colors={['#111827', '#1f2937', '#000000']}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />

            {/* Header Info */}
            <View style={styles.header}>
                <Text style={styles.headingText}>{Math.round(heading)}° {getDirectionLabel(heading)}</Text>
                {mode !== 'NORMAL' && currentZone && (
                    <View>
                        <Text style={[styles.zoneText, { color: currentZone.color }]}>{currentZone.id}</Text>
                        <Text style={styles.zoneName}>{currentZone.name}</Text>
                    </View>
                )}
            </View>

            {/* Compass Area */}
            <View style={styles.compassContainer}>
                {/* Fixed Indicator for Vastu Modes */}
                {mode !== 'NORMAL' && (
                    <View style={styles.indicatorContainer}>
                        <View style={styles.indicator} />
                    </View>
                )}

                {/* Rotating Dial */}
                <Animated.View style={[styles.dial, animatedDialStyle]}>
                    <CompassFace mode={mode} size={COMPASS_SIZE} />
                </Animated.View>

                {/* Rotating Needle for Normal Mode */}
                {mode === 'NORMAL' && (
                    <Animated.View style={[styles.needle, animatedNeedleStyle]}>
                        <Needle size={COMPASS_SIZE} />
                    </Animated.View>
                )}

                {/* Center Pivot Cap */}
                <View style={styles.pivot} />
            </View>

            {/* Mode Selector */}
            <View style={styles.controls}>
                <Dropdown
                    options={['NORMAL', 'VASTU_16', 'VASTU_32', 'CHAKRA']}
                    selectedOption={mode}
                    onSelect={(m) => setMode(m as Mode)}
                />
            </View>

            {!sensorAvailable && (
                <View style={styles.warning}>
                    <Text style={styles.warningText}>Sensors not available</Text>
                </View>
            )}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 60,
    },
    header: {
        alignItems: 'center',
        height: 120,
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 56,
        fontWeight: '200', // Thin font for iOS elegance
        color: '#fff',
        fontVariant: ['tabular-nums'],
        letterSpacing: -1,
    },
    zoneText: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 0.5,
    },
    zoneName: {
        fontSize: 15,
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        marginTop: 2,
        fontWeight: '400',
    },
    compassContainer: {
        width: COMPASS_SIZE,
        height: COMPASS_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    dial: {
        position: 'absolute',
    },
    needle: {
        position: 'absolute',
    },
    indicatorContainer: {
        position: 'absolute',
        top: -20,
        zIndex: 10,
        alignItems: 'center',
    },
    indicator: {
        width: 4,
        height: 30,
        backgroundColor: '#ef4444',
        borderRadius: 2,
    },
    pivot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#1f2937',
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        zIndex: 20,
    },
    controls: {
        width: '100%',
        paddingHorizontal: 20,
    },

    warning: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'rgba(255,0,0,0.5)',
        padding: 10,
        borderRadius: 5,
    },
    warningText: {
        color: '#fff',
    }
});
