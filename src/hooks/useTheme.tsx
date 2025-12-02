import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, darkTheme, lightTheme } from '../constants/theme';

const THEME_STORAGE_KEY = '@compass_vastu_theme';

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (themeName: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(darkTheme);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        loadTheme();
    }, []);

    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
            if (savedTheme === 'light') {
                setThemeState(lightTheme);
                setIsDark(false);
            } else {
                setThemeState(darkTheme);
                setIsDark(true);
            }
        } catch (error) {
            console.log('Error loading theme:', error);
        }
    };

    const saveTheme = async (themeName: 'light' | 'dark') => {
        try {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, themeName);
        } catch (error) {
            console.log('Error saving theme:', error);
        }
    };

    const setTheme = (themeName: 'light' | 'dark') => {
        const newTheme = themeName === 'light' ? lightTheme : darkTheme;
        setThemeState(newTheme);
        setIsDark(themeName === 'dark');
        saveTheme(themeName);
    };

    const toggleTheme = () => {
        const newThemeName = isDark ? 'light' : 'dark';
        setTheme(newThemeName);
    };

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
