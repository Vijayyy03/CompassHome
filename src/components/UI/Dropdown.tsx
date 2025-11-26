import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';

interface DropdownProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}

const { width } = Dimensions.get('window');

export const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
    const [visible, setVisible] = useState(false);

    const handleSelect = (option: string) => {
        Haptics.selectionAsync();
        onSelect(option);
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => { Haptics.selectionAsync(); setVisible(true); }}>
                <BlurView intensity={20} tint="light" style={styles.blurButton}>
                    <Text style={styles.buttonText}>{selectedOption.replace('_', ' ')}</Text>
                    <View style={styles.chevron} />
                </BlurView>
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
                <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={() => setVisible(false)}>
                    <View style={styles.dropdownContainer}>
                        <BlurView intensity={80} tint="dark" style={styles.dropdownBlur}>
                            <View style={styles.header}>
                                <Text style={styles.headerTitle}>Select Mode</Text>
                            </View>
                            <FlatList data={options} keyExtractor={(item) => item} scrollEnabled={false} renderItem={({ item, index }) => {
                                const isLast = index === options.length - 1;
                                const isSelected = item === selectedOption;
                                return (
                                    <TouchableOpacity style={[styles.item, isLast && styles.lastItem]} onPress={() => handleSelect(item)}>
                                        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>{item.replace('_', ' ')}</Text>
                                        {isSelected && (
                                            <View style={styles.checkmark}>
                                                <View style={styles.checkmarkStem} />
                                                <View style={styles.checkmarkKick} />
                                            </View>
                                        )}
                                    </TouchableOpacity>
                                );
                            }} />
                        </BlurView>
                        <TouchableOpacity style={styles.cancelButton} onPress={() => setVisible(false)}>
                            <BlurView intensity={80} tint="dark" style={styles.cancelBlur}>
                                <Text style={styles.cancelText}>Cancel</Text>
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { width: '100%', alignItems: 'center', zIndex: 100 },
    button: { width: width * 0.6, borderRadius: 14, overflow: 'hidden', backgroundColor: 'rgba(255,255,255,0.1)' },
    blurButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 20 },
    buttonText: { color: '#fff', fontSize: 17, fontWeight: '600', letterSpacing: -0.4 },
    chevron: { width: 10, height: 10, borderRightWidth: 2, borderBottomWidth: 2, borderColor: 'rgba(255,255,255,0.5)', transform: [{ rotate: '45deg' }], marginTop: -4 },
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-end', paddingBottom: 40 },
    dropdownContainer: { width: width * 0.95, alignSelf: 'center' },
    dropdownBlur: { borderRadius: 14, overflow: 'hidden', marginBottom: 10 },
    header: { paddingVertical: 12, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.15)' },
    headerTitle: { color: 'rgba(255,255,255,0.5)', fontSize: 13, fontWeight: '500' },
    item: { paddingVertical: 16, paddingHorizontal: 20, borderBottomWidth: 0.5, borderBottomColor: 'rgba(255,255,255,0.15)', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)' },
    lastItem: { borderBottomWidth: 0 },
    itemText: { color: '#fff', fontSize: 20, fontWeight: '400', letterSpacing: 0.3 },
    selectedItemText: { color: '#0a84ff', fontWeight: '600' },
    checkmark: { width: 14, height: 14, transform: [{ rotate: '45deg' }], marginTop: -4 },
    checkmarkStem: { position: 'absolute', width: 2, height: 14, backgroundColor: '#0a84ff', right: 0 },
    checkmarkKick: { position: 'absolute', width: 6, height: 2, backgroundColor: '#0a84ff', bottom: 0, right: 0 },
    cancelButton: { borderRadius: 14, overflow: 'hidden' },
    cancelBlur: { paddingVertical: 16, alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)' },
    cancelText: { color: '#0a84ff', fontSize: 20, fontWeight: '600' }
});
