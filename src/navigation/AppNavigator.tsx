import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { useTheme } from '../hooks/useTheme';
import { hapticLight } from '../utils/haptics';

// Import screens
import { CompassScreen } from '../screens/CompassScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { VastuTipsScreen } from '../screens/VastuTipsScreen';
import { AnalysisScreen } from '../screens/AnalysisScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootTabParamList = {
    Home: undefined;
    Compass: undefined;
    Tips: undefined;
    Analysis: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

// Custom Tab Bar Icons
const HomeIcon = ({ color, size }: { color: string; size: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path d="M9 22V12h6v10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

const CompassIcon = ({ color, size }: { color: string; size: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <Path d="M16 8L8 16M16 8l-4 8-4-8 4 8 4-8z" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
);

const TipsIcon = ({ color, size }: { color: string; size: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const AnalysisIcon = ({ color, size }: { color: string; size: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
            d="M18 20V10M12 20V4M6 20v-6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

const SettingsIcon = ({ color, size }: { color: string; size: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
        <Path
            d="M12 1v6m0 6v6M1 12h6m6 0h6"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
        />
    </Svg>
);

export const AppNavigator = () => {
    const { theme, isDark } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 80,
                    paddingBottom: 20,
                    paddingTop: 10,
                    backgroundColor: 'transparent',
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={80}
                        tint={isDark ? 'dark' : 'light'}
                        style={StyleSheet.absoluteFill}
                    />
                ),
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textTertiary,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    marginTop: 4,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
                    tabBarLabel: 'Home',
                }}
                listeners={{
                    tabPress: () => hapticLight(),
                }}
            />
            <Tab.Screen
                name="Compass"
                component={CompassScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <CompassIcon color={color} size={size} />,
                    tabBarLabel: 'Compass',
                }}
                listeners={{
                    tabPress: () => hapticLight(),
                }}
            />
            <Tab.Screen
                name="Tips"
                component={VastuTipsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <TipsIcon color={color} size={size} />,
                    tabBarLabel: 'Tips',
                }}
                listeners={{
                    tabPress: () => hapticLight(),
                }}
            />
            <Tab.Screen
                name="Analysis"
                component={AnalysisScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <AnalysisIcon color={color} size={size} />,
                    tabBarLabel: 'Analysis',
                }}
                listeners={{
                    tabPress: () => hapticLight(),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <SettingsIcon color={color} size={size} />,
                    tabBarLabel: 'Settings',
                }}
                listeners={{
                    tabPress: () => hapticLight(),
                }}
            />
        </Tab.Navigator>
    );
};
