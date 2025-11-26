import * as Haptics from 'expo-haptics';

let hapticsEnabled = true;

export const setHapticsEnabled = (enabled: boolean) => {
    hapticsEnabled = enabled;
};

export const getHapticsEnabled = () => hapticsEnabled;

export const hapticLight = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch (error) {
        // Silently fail if haptics not available
    }
};

export const hapticMedium = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (error) {
        // Silently fail
    }
};

export const hapticHeavy = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    } catch (error) {
        // Silently fail
    }
};

export const hapticSuccess = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (error) {
        // Silently fail
    }
};

export const hapticWarning = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch (error) {
        // Silently fail
    }
};

export const hapticError = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } catch (error) {
        // Silently fail
    }
};

export const hapticSelection = async () => {
    if (!hapticsEnabled) return;
    try {
        await Haptics.selectionAsync();
    } catch (error) {
        // Silently fail
    }
};
