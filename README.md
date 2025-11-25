# Compass Vastu App

A premium Compass application with Vastu Shastra modes (16-Zone, 32-Zone, Chakra) built with React Native, Expo, and TypeScript.

## Features
- **Smooth Compass**: Uses Magnetometer + Accelerometer with Low-Pass Filter for stable rotation.
- **4 Modes**:
  - **Normal**: Standard compass with degree and direction.
  - **16-Zone Vastu**: Color-coded zones for Vastu analysis.
  - **32-Zone Vastu**: Detailed 32-pada Vastu mandala.
  - **Chakra**: Applied Vastu Chakra overlay.
- **Premium UI**: Dark mode, glowing effects, smooth animations (60fps).
- **True North**: Support for True North correction (requires Location permission).

## Prerequisites
- Node.js (LTS)
- Expo Go app on your Android device (for testing)

## Installation

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

## Running the App

### Development Mode
To run the app in development mode and test on your device:

```bash
npx expo start
```
Scan the QR code with the Expo Go app on Android.

### Building for Production (APK/AAB)

To build a standalone APK or AAB for the Play Store, you need to use EAS Build (Expo Application Services).

1.  **Install EAS CLI**:
    ```bash
    npm install -g eas-cli
    ```

2.  **Login to Expo**:
    ```bash
    eas login
    ```

3.  **Configure Build**:
    ```bash
    eas build:configure
    ```

4.  **Build APK (for testing)**:
    ```bash
    eas build -p android --profile preview
    ```

5.  **Build AAB (for Play Store)**:
    ```bash
    eas build -p android --profile production
    ```

## Project Structure
- `src/components`: UI components (CompassFace, Needle, etc.)
- `src/hooks`: Custom hooks (useCompass)
- `src/screens`: Main screens (CompassScreen)
- `src/constants`: Data files (Vastu zones)
- `src/utils`: Helper functions (SVG math)

## Troubleshooting
- **Sensors not working?**: Ensure your device has a Magnetometer. Some budget devices do not have this sensor.
- **Wrong Direction?**: Calibrate your compass by moving the phone in a figure-8 motion.
