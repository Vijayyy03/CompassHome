import { useState, useEffect, useRef } from 'react';
import { Magnetometer, Accelerometer } from 'expo-sensors';
import * as Location from 'expo-location';
import { Platform } from 'react-native';

// Low Pass Filter Factor (0.0 - 1.0). Lower = smoother but more lag.
const ALPHA = 0.1;
const UPDATE_INTERVAL = 16; // ~60Hz

export const useCompass = () => {
    const [heading, setHeading] = useState(0);
    const [sensorAvailable, setSensorAvailable] = useState(false);
    const [trueNorthOffset, setTrueNorthOffset] = useState(0);

    const magSubscription = useRef<any>(null);
    const accSubscription = useRef<any>(null);

    const magData = useRef({ x: 0, y: 0, z: 0 });
    const accData = useRef({ x: 0, y: 0, z: 0 });

    const filteredHeading = useRef(0);

    const _subscribe = async () => {
        const magAvailable = await Magnetometer.isAvailableAsync();
        const accAvailable = await Accelerometer.isAvailableAsync();

        if (magAvailable && accAvailable) {
            setSensorAvailable(true);

            Magnetometer.setUpdateInterval(UPDATE_INTERVAL);
            Accelerometer.setUpdateInterval(UPDATE_INTERVAL);

            magSubscription.current = Magnetometer.addListener((data) => {
                magData.current = data;
                calculateHeading();
            });

            accSubscription.current = Accelerometer.addListener((data) => {
                accData.current = data;
                calculateHeading();
            });
        } else {
            setSensorAvailable(false);
        }
    };

    const _unsubscribe = () => {
        magSubscription.current && magSubscription.current.remove();
        accSubscription.current && accSubscription.current.remove();
        magSubscription.current = null;
        accSubscription.current = null;
    };

    const calculateHeading = () => {
        const { x: Ax, y: Ay, z: Az } = accData.current;
        const { x: Mx, y: My, z: Mz } = magData.current;

        // Tilt compensation logic
        const pitch = Math.atan2(Ay, Math.sqrt(Ax * Ax + Az * Az));
        const roll = Math.atan2(-Ax, Math.sqrt(Ay * Ay + Az * Az));

        const cosRoll = Math.cos(roll);
        const sinRoll = Math.sin(roll);
        const cosPitch = Math.cos(pitch);
        const sinPitch = Math.sin(pitch);

        const Mx_comp = Mx * cosPitch + Mz * sinPitch;
        const My_comp = Mx * sinRoll * sinPitch + My * cosRoll - Mz * sinRoll * cosPitch;

        let azimuth = Math.atan2(-My_comp, Mx_comp);
        let deg = azimuth * (180 / Math.PI);

        if (deg < 0) {
            deg += 360;
        }

        // Low Pass Filter
        let diff = deg - filteredHeading.current;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;

        filteredHeading.current += diff * ALPHA;

        if (filteredHeading.current >= 360) filteredHeading.current -= 360;
        if (filteredHeading.current < 0) filteredHeading.current += 360;

        // Apply True North offset
        let finalHeading = filteredHeading.current + trueNorthOffset;
        if (finalHeading >= 360) finalHeading -= 360;
        if (finalHeading < 0) finalHeading += 360;

        setHeading(finalHeading);
    };

    useEffect(() => {
        _subscribe();

        // Get True North offset
        (async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status === 'granted') {
                    // We can't easily get declination directly, but we can get the current heading from Location service
                    // which might provide true heading vs mag heading.
                    // However, mixing two sensor sources (raw vs system) is tricky.
                    // For now, we will assume 0 offset unless we implement a full WMM model.
                    // Or we can use Location.getHeadingAsync() to get a one-time calibration?
                    // Let's keep it simple for now.
                }
            } catch (e) {
                console.log("Location permission error", e);
            }
        })();

        return () => _unsubscribe();
    }, [trueNorthOffset]);

    return { heading, sensorAvailable };
};
