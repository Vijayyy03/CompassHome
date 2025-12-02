// Premium Theme System for Compass Vastu App
// Implements both dark and light modes with glassmorphism support

export interface Theme {
    name: 'light' | 'dark';
    colors: {
        // Base colors
        background: string;
        surface: string;
        card: string;
        text: string;
        textSecondary: string;
        textTertiary: string;
        border: string;

        // Primary colors
        primary: string;
        primaryLight: string;
        primaryDark: string;

        // Accent colors
        accent: string;
        accentLight: string;

        // Semantic colors
        success: string;
        warning: string;
        error: string;
        info: string;

        // Compass specific
        compassBg: string;
        compassBorder: string;
        needleNorth: string;
        needleSouth: string;
        indicator: string;

        // Glass effect
        glassBackground: string;
        glassBorder: string;
    };

    gradients: {
        background: readonly [string, string, string];
        primary: readonly [string, string, string];
        accent: readonly [string, string, string];
        card: readonly [string, string];
        compass: readonly [string, string, string];
    };

    shadows: {
        small: {
            shadowColor: string;
            shadowOffset: { width: number; height: number };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        medium: {
            shadowColor: string;
            shadowOffset: { width: number; height: number };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        large: {
            shadowColor: string;
            shadowOffset: { width: number; height: number };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        glow: {
            shadowColor: string;
            shadowOffset: { width: number; height: number };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
    };

    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };

    borderRadius: {
        small: number;
        medium: number;
        large: number;
        round: number;
    };

    typography: {
        fontFamily: {
            regular: string;
            medium: string;
            semibold: string;
            bold: string;
        };
        fontSize: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
            xxxl: number;
            display: number;
        };
    };
}

export const darkTheme: Theme = {
    name: 'dark',
    colors: {
        background: '#0A0E1A',
        surface: '#111827',
        card: '#1F2937',
        text: '#FFFFFF',
        textSecondary: 'rgba(255, 255, 255, 0.7)',
        textTertiary: 'rgba(255, 255, 255, 0.5)',
        border: 'rgba(255, 255, 255, 0.1)',

        primary: '#6366F1', // Indigo
        primaryLight: '#818CF8',
        primaryDark: '#4F46E5',

        accent: '#EC4899', // Pink
        accentLight: '#F472B6',

        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        compassBg: '#1F2937',
        compassBorder: '#374151',
        needleNorth: '#EF4444',
        needleSouth: '#FFFFFF',
        indicator: '#EF4444',

        glassBackground: 'rgba(31, 41, 55, 0.7)',
        glassBorder: 'rgba(255, 255, 255, 0.1)',
    },

    gradients: {
        background: ['#0F172A', '#1E293B', '#0A0E1A'],
        primary: ['#6366F1', '#8B5CF6', '#EC4899'],
        accent: ['#EC4899', '#F472B6', '#FBBF24'],
        card: ['rgba(31, 41, 55, 0.8)', 'rgba(17, 24, 39, 0.9)'],
        compass: ['#1E293B', '#334155', '#1F2937'],
    },

    shadows: {
        small: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 2,
        },
        medium: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 4,
        },
        large: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,
            elevation: 8,
        },
        glow: {
            shadowColor: '#6366F1',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 10,
        },
    },

    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
    },

    borderRadius: {
        small: 8,
        medium: 12,
        large: 20,
        round: 9999,
    },

    typography: {
        fontFamily: {
            regular: 'System',
            medium: 'System',
            semibold: 'System',
            bold: 'System',
        },
        fontSize: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
            xxl: 24,
            xxxl: 32,
            display: 56,
        },
    },
};

export const lightTheme: Theme = {
    name: 'light',
    colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        card: '#F1F5F9',
        text: '#0F172A',
        textSecondary: 'rgba(15, 23, 42, 0.7)',
        textTertiary: 'rgba(15, 23, 42, 0.5)',
        border: 'rgba(15, 23, 42, 0.1)',

        primary: '#6366F1',
        primaryLight: '#818CF8',
        primaryDark: '#4F46E5',

        accent: '#EC4899',
        accentLight: '#F472B6',

        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        compassBg: '#FFFFFF',
        compassBorder: '#E5E7EB',
        needleNorth: '#EF4444',
        needleSouth: '#6B7280',
        indicator: '#EF4444',

        glassBackground: 'rgba(255, 255, 255, 0.7)',
        glassBorder: 'rgba(15, 23, 42, 0.1)',
    },

    gradients: {
        background: ['#F0F9FF', '#E0F2FE', '#F8FAFC'],
        primary: ['#6366F1', '#8B5CF6', '#EC4899'],
        accent: ['#EC4899', '#F472B6', '#FBBF24'],
        card: ['rgba(255, 255, 255, 0.9)', 'rgba(248, 250, 252, 0.8)'],
        compass: ['#EFF6FF', '#DBEAFE', '#FFFFFF'],
    },

    shadows: {
        small: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 2,
        },
        medium: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 4.65,
            elevation: 4,
        },
        large: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.22,
            shadowRadius: 10.32,
            elevation: 8,
        },
        glow: {
            shadowColor: '#6366F1',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 10,
        },
    },

    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48,
    },

    borderRadius: {
        small: 8,
        medium: 12,
        large: 20,
        round: 9999,
    },

    typography: {
        fontFamily: {
            regular: 'System',
            medium: 'System',
            semibold: 'System',
            bold: 'System',
        },
        fontSize: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
            xxl: 24,
            xxxl: 32,
            display: 56,
        },
    },
};

// Animation timings
export const animations = {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 800,
};

// Blur intensities for glassmorphism
export const blurIntensity = {
    light: 10,
    medium: 20,
    strong: 40,
    extraStrong: 80,
};
