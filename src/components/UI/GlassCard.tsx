import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../hooks/useTheme';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps {
    children: ReactNode;
    style?: ViewStyle;
    blurIntensity?: number;
    borderless?: boolean;
    gradient?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    style,
    blurIntensity = 20,
    borderless = false,
    gradient = false,
}) => {
    const { theme, isDark } = useTheme();

    if (gradient) {
        return (
            <LinearGradient
                colors={theme.gradients.card}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                    styles.container,
                    {
                        borderColor: borderless ? 'transparent' : theme.colors.glassBorder,
                        borderWidth: borderless ? 0 : 1,
                    },
                    theme.shadows.medium,
                    style,
                ]}
            >
                {children}
            </LinearGradient>
        );
    }

    return (
        <BlurView
            intensity={blurIntensity}
            tint={isDark ? 'dark' : 'light'}
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.glassBackground,
                    borderColor: borderless ? 'transparent' : theme.colors.glassBorder,
                    borderWidth: borderless ? 0 : 1,
                },
                theme.shadows.medium,
                style,
            ]}
        >
            {children}
        </BlurView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
    },
});
