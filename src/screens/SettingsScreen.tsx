import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../hooks/useTheme';
import { GlassCard } from '../components/UI/GlassCard';
import { hapticLight } from '../utils/haptics';

export const SettingsScreen = () => {
    const { theme, isDark, toggleTheme } = useTheme();

    const handleThemeToggle = () => {
        hapticLight();
        toggleTheme();
    };

    return (
        <View style={styles.container}>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            <LinearGradient colors={theme.gradients.background as any} style={StyleSheet.absoluteFill} />

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.colors.text }]}>Settings</Text>
                    <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                        Customize your experience
                    </Text>
                </View>

                {/* Appearance */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Appearance</Text>
                    <GlassCard style={styles.settingCard}>
                        <View style={styles.settingRow}>
                            <View style={styles.settingInfo}>
                                <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                                    {isDark ? '🌙' : '☀️'} {isDark ? 'Dark Mode' : 'Light Mode'}
                                </Text>
                                <Text style={[styles.settingDescription, { color: theme.colors.textSecondary }]}>
                                    {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                                </Text>
                            </View>
                            <Switch
                                value={isDark}
                                onValueChange={handleThemeToggle}
                                trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                                thumbColor="#fff"
                            />
                        </View>
                    </GlassCard>
                </View>

                {/* Compass Settings */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Compass</Text>
                    <GlassCard style={styles.infoCard}>
                        <Text style={styles.infoIcon}>🧭</Text>
                        <Text style={[styles.infoTitle, { color: theme.colors.text }]}>
                            Calibration
                        </Text>
                        <Text style={[styles.infoText, { color: theme.colors.textSecondary }]}>
                            Move your device in a figure-8 motion to calibrate the compass for better accuracy.
                        </Text>
                    </GlassCard>
                </View>

                {/* About */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>About</Text>
                    <GlassCard style={styles.aboutCard}>
                        <Text style={styles.appIcon}>📱</Text>
                        <Text style={[styles.appName, { color: theme.colors.text }]}>
                            Vastu Compass
                        </Text>
                        <Text style={[styles.version, { color: theme.colors.textSecondary }]}>
                            Version 1.0.0
                        </Text>
                        <Text style={[styles.aboutText, { color: theme.colors.textSecondary }]}>
                            A premium compass application with Vastu Shastra guidance to harmonize your living
                            and working spaces.
                        </Text>
                    </GlassCard>
                </View>

                {/* Features */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Features</Text>
                    <GlassCard style={styles.featureCard}>
                        <View style={styles.featureItem}>
                            <Text style={styles.featureIcon}>✨</Text>
                            <Text style={[styles.featureText, { color: theme.colors.text }]}>
                                40+ Vastu Tips
                            </Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Text style={styles.featureIcon}>🧭</Text>
                            <Text style={[styles.featureText, { color: theme.colors.text }]}>
                                4 Compass Modes
                            </Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Text style={styles.featureIcon}>📊</Text>
                            <Text style={[styles.featureText, { color: theme.colors.text }]}>
                                Direction Analysis
                            </Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Text style={styles.featureIcon}>⭐</Text>
                            <Text style={[styles.featureText, { color: theme.colors.text }]}>
                                Bookmark Tips
                            </Text>
                        </View>
                        <View style={styles.featureItem}>
                            <Text style={styles.featureIcon}>🎨</Text>
                            <Text style={[styles.featureText, { color: theme.colors.text }]}>
                                Dark/Light Themes
                            </Text>
                        </View>
                    </GlassCard>
                </View>

                {/* Credits */}
                <View style={styles.section}>
                    <GlassCard style={styles.creditsCard}>
                        <Text style={[styles.creditsText, { color: theme.colors.textTertiary }]}>
                            Built with ❤️ using React Native & Expo
                        </Text>
                        <Text style={[styles.creditsText, { color: theme.colors.textTertiary }]}>
                            © 2025 Vastu Compass
                        </Text>
                    </GlassCard>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 15,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 12,
    },
    settingCard: {
        padding: 20,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingInfo: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    settingDescription: {
        fontSize: 14,
    },
    infoCard: {
        padding: 20,
    },
    infoIcon: {
        fontSize: 32,
        marginBottom: 12,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 15,
        lineHeight: 22,
    },
    aboutCard: {
        padding: 24,
        alignItems: 'center',
    },
    appIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    appName: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 4,
    },
    version: {
        fontSize: 14,
        marginBottom: 16,
    },
    aboutText: {
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
    },
    featureCard: {
        padding: 20,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    featureIcon: {
        fontSize: 24,
        marginRight: 12,
        width: 32,
    },
    featureText: {
        fontSize: 16,
        fontWeight: '500',
    },
    creditsCard: {
        padding: 20,
        alignItems: 'center',
    },
    creditsText: {
        fontSize: 13,
        marginBottom: 4,
        textAlign: 'center',
    },
});
