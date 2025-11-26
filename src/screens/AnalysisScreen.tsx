import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../hooks/useTheme';

export const AnalysisScreen = () => {
    const { theme, isDark } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            <LinearGradient colors={theme.gradients.background as any} style={StyleSheet.absoluteFill} />

            <View style={styles.content}>
                <Text style={[styles.title, { color: theme.colors.text }]}>Analysis Screen</Text>
                <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                    Coming soon...
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
});
