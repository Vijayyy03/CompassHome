import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../hooks/useTheme';
import { GlassCard } from '../components/UI/GlassCard';
import { vastuTips, VastuTip } from '../constants/vastuTips';
import { useStorage } from '../hooks/useStorage';
import { hapticLight } from '../utils/haptics';

export const VastuTipsScreen = () => {
    const { theme, isDark } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [bookmarked, setBookmarked] = useStorage<string[]>('bookmarked_tips', []);

    const categories = [
        { id: 'all', label: 'All', icon: '' },
        { id: 'room', label: 'Rooms', icon: '' },
        { id: 'direction', label: 'Directions', icon: '' },
        { id: 'element', label: 'Elements', icon: '' },
        { id: 'general', label: 'General', icon: '' },
        { id: 'remedy', label: 'Remedies', icon: '' },
    ];

    const filteredTips = vastuTips.filter((tip) => {
        const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) || tip.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || tip.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const toggleBookmark = (tipId: string) => {
        hapticLight();
        setBookmarked((prev) => prev.includes(tipId) ? prev.filter((id) => id !== tipId) : [...prev, tipId]);
    };

    const renderTip = ({ item }: { item: VastuTip }) => {
        const isBookmarked = bookmarked.includes(item.id);
        return (
            <GlassCard style={styles.tipCard}>
                <View style={styles.tipHeader}>
                    <Text style={styles.tipIcon}>{item.icon}</Text>
                    <TouchableOpacity onPress={() => toggleBookmark(item.id)} style={styles.bookmarkBtn}>
                        <Text style={styles.bookmarkIcon}>{isBookmarked ? '' : ''}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.tipTitle, { color: theme.colors.text }]}>{item.title}</Text>
                {item.direction && (
                    <View style={[styles.badge, { backgroundColor: theme.colors.primary + '20' }]}>
                        <Text style={[styles.badgeText, { color: theme.colors.primary }]}>{item.direction}</Text>
                    </View>
                )}
                <Text style={[styles.tipDescription, { color: theme.colors.textSecondary }]}>{item.description}</Text>
                <View style={styles.tipFooter}>
                    <View style={[styles.categoryBadge, { backgroundColor: theme.colors.card }]}>
                        <Text style={[styles.categoryText, { color: theme.colors.textTertiary }]}>{item.category}</Text>
                    </View>
                    {item.importance === 'high' && (
                        <View style={[styles.importanceBadge, { backgroundColor: theme.colors.error + '20' }]}>
                            <Text style={[styles.importanceText, { color: theme.colors.error }]}>Important</Text>
                        </View>
                    )}
                </View>
            </GlassCard>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar style={isDark ? 'light' : 'dark'} />
            <LinearGradient colors={theme.gradients.background as any} style={StyleSheet.absoluteFill} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.colors.text }]}>Vastu Tips</Text>
                    <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>{filteredTips.length} tips available</Text>
                </View>
                <GlassCard style={styles.searchCard}>
                    <TextInput style={[styles.searchInput, { color: theme.colors.text }]} placeholder="Search tips..." placeholderTextColor={theme.colors.textTertiary} value={searchQuery} onChangeText={setSearchQuery} />
                </GlassCard>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll} contentContainerStyle={styles.categories}>
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat.id;
                        return (
                            <TouchableOpacity key={cat.id} onPress={() => { hapticLight(); setSelectedCategory(cat.id); }}>
                                <GlassCard style={[styles.categoryChip, isSelected ? { backgroundColor: theme.colors.primary + '40' } : null] as any}>
                                    <Text style={styles.categoryIcon}>{cat.icon}</Text>
                                    <Text style={[styles.categoryLabel, { color: isSelected ? theme.colors.primary : theme.colors.text }]}>{cat.label}</Text>
                                </GlassCard>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
                <FlatList data={filteredTips} renderItem={renderTip} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    content: { flex: 1, paddingTop: 60 },
    header: { paddingHorizontal: 20, marginBottom: 20 },
    title: { fontSize: 32, fontWeight: '700', marginBottom: 4 },
    subtitle: { fontSize: 15 },
    searchCard: { marginHorizontal: 20, marginBottom: 16, padding: 12 },
    searchInput: { fontSize: 16, padding: 8 },
    categoriesScroll: { marginBottom: 16 },
    categories: { paddingHorizontal: 20, gap: 10 },
    categoryChip: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, gap: 6 },
    categoryIcon: { fontSize: 16 },
    categoryLabel: { fontSize: 14, fontWeight: '600' },
    listContent: { paddingHorizontal: 20, paddingBottom: 100 },
    tipCard: { padding: 20, marginBottom: 16 },
    tipHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
    tipIcon: { fontSize: 32 },
    bookmarkBtn: { padding: 8 },
    bookmarkIcon: { fontSize: 24 },
    tipTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
    badge: { alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginBottom: 12 },
    badgeText: { fontSize: 12, fontWeight: '600' },
    tipDescription: { fontSize: 15, lineHeight: 22, marginBottom: 16 },
    tipFooter: { flexDirection: 'row', gap: 8 },
    categoryBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    categoryText: { fontSize: 11, fontWeight: '600', textTransform: 'uppercase' },
    importanceBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
    importanceText: { fontSize: 11, fontWeight: '600' },
});
