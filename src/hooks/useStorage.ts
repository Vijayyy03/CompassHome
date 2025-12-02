import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadStoredValue();
    }, [key]);

    const loadStoredValue = async () => {
        try {
            const item = await AsyncStorage.getItem(key);
            if (item !== null) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.log(`Error loading ${key}:`, error);
        } finally {
            setIsLoading(false);
        }
    };

    const setValue = useCallback(
        async (value: T | ((val: T) => T)) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
                console.log(`Error saving ${key}:`, error);
            }
        },
        [key, storedValue]
    );

    const removeValue = useCallback(async () => {
        try {
            await AsyncStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.log(`Error removing ${key}:`, error);
        }
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue, isLoading] as const;
}
