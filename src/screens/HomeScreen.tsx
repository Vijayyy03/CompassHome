import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../hooks/useTheme';
import { GlassCard } from '../components/UI/GlassCard';
import { getHighPriorityTips } from '../constants/vastuTips';
import { useNavigation } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../navigation/AppNavigator';

const { width } = Dimensions.get('window');

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

export const HomeScreen = () => {
    const { theme, isDark } = useTheme();
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const highPriorityTips = getHighPriorityTips().slice(0, 3);

    return (
        <View style={styles.container}>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            <LinearGradient
                colors={theme.gradients.background as any}
                style={StyleSheet.absoluteFill}
            />

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.colors.text }]}>
                        Vastu Compass
                    </Text>
                    <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
                        Harmonize your space with ancient wisdom
                    </Text>
                </View>

                {/* Quick Actions */}
                <View style={styles.quickActions}>
                    <TouchableOpacity
                        style={styles.actionCard}
                        onPress={() => navigation.navigate('Compass')}
                    >
                        <GlassCard style={styles.actionCardInner}>
                            <Text style={styles.actionIcon}>🧭</Text>
                            <Text style={[styles.actionTitle, { color: theme.colors.text }]}>
                                Check Direction
                            </Text>
                            <Text style={[styles.actionSubtitle, { color: theme.colors.textSecondary }]}>
                                Use compass
                            </Text>
                        </GlassCard>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionCard}
                        onPress={() => navigation.navigate('Tips')}
                    >
                        <GlassCard style={styles.actionCardInner}>
                            <Text style={styles.actionIcon}>💡</Text>
                            <Text style={[styles.actionTitle, { color: theme.colors.text }]}>
                                Browse Tips
                            </Text>
                            <Text style={[styles.actionSubtitle, { color: theme.colors.textSecondary }]}>
                                40+ tips
                            </Text>
                        </GlassCard>
                    </TouchableOpacity>
                </View>

                {/* Daily Tip */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                        ✨ Tip of the Day
                    </Text>
                    <GlassCard style={styles.dailyTipCard}>
                        <Text style={styles.tipIcon}>{highPriorityTips[0]?.icon}</Text>
                        <Text style={[styles.tipTitle, { color: theme.colors.text }]}>
                            {highPriorityTips[0]?.title}
                        </Text>
                        <Text style={[styles.tipDescription, { color: theme.colors.textSecondary }]}>
                            {highPriorityTips[0]?.description}
                        </Text>
                    </GlassCard>
                </View>

                {/* Important Tips */}
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                        🔥 Essential Vastu
                    </Text>
                    {highPriorityTips.slice(1, 3).map((tip) => (
                        <GlassCard key={tip.id} style={styles.tipCard}>
                            <View style={styles.tipHeader}>
                                <Text style={styles.tipIconSmall}>{tip.icon}</Text>
                                <View style={styles.tipContent}>
                                    <Text style={[styles.tipTitleSmall, { color: theme.colors.text }]}>
                                        {tip.title}
                                    </Text>
                                    <Text
                                        style={[styles.tipDescriptionSmall, { color: theme.colors.textSecondary }]}
                                        numberOfLines={2}
                                    >
                                        {tip.description}
                                    </Text>
                                </View>
                            </View>
                        </GlassCard>
                    ))}
                </View>

                {/* Bottom Spacing for Tab Bar */}
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
        fontSize: 36,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '400',
    },
    quickActions: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 30,
    },
    actionCard: {
        flex: 1,
    },
    actionCardInner: {
        padding: 20,
        alignItems: 'center',
        minHeight: 140,
        justifyContent: 'center',
    },
    actionIcon: {
        fontSize: 40,
        marginBottom: 12,
    },
    actionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    actionSubtitle: {
        fontSize: 13,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 16,
    },
    dailyTipCard: {
        padding: 24,
    },
    tipIcon: {
        fontSize: 48,
        marginBottom: 16,
    },
    tipTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
    },
    tipDescription: {
        fontSize: 15,
        lineHeight: 22,
    },
    tipCard: {
        padding: 16,
        marginBottom: 12,
    },
    tipHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    tipIconSmall: {
        fontSize: 28,
        marginRight: 12,
    },
    tipContent: {
        flex: 1,
    },
    tipTitleSmall: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 6,
    },
    tipDescriptionSmall: {
        fontSize: 14,
        lineHeight: 20,
    },
});
