# Caser Keep Note - Customization Guide

This guide explains how to continue the customization of your app, "caser keep note".

## 1. How to add more Themes (Reach 40 Themes)

To add more themes beyond the "Caser" theme already included:

1.  **Create a new theme file:** Go to `packages/lib/themes/` and create a new `.ts` file (e.g., `themeName.ts`). Use `caser.ts` or `light.ts` as a template.
2.  **Register the theme ID:** Open `packages/lib/models/Setting.ts` and add a new constant:
    ```typescript
    public static THEME_MY_NEW_THEME = 9; // Increment the number for each new theme
    ```
3.  **Import and add to theme list:** Open `packages/lib/theme.ts`:
    - Import your new file: `import theme_myNewTheme from './themes/themeName';`
    - Add it to the `themes` object: `[Setting.THEME_MY_NEW_THEME]: theme_myNewTheme,`
4.  **Add to Settings Menu:** Open `packages/lib/models/settings/builtInMetadata.ts` and add it to the `themeOptions` function:
    ```typescript
    output[Setting.THEME_MY_NEW_THEME] = 'My New Theme Name';
    ```

## 2. How to change the App Icons

To change the icons to your custom designs:

1.  **Prepare your icons:** You need your icon in several sizes (48x48, 72x72, 96x96, 144x144, 192x192).
2.  **Replace the files:** Overwrite the following files in `packages/app-mobile/android/app/src/main/res/`:
    - `mipmap-mdpi/ic_launcher.png` (48x48)
    - `mipmap-hdpi/ic_launcher.png` (72x72)
    - `mipmap-xhdpi/ic_launcher.png` (96x96)
    - `mipmap-xxhdpi/ic_launcher.png` (144x144)
    - `mipmap-xxxhdpi/ic_launcher.png` (192x192)
3.  **Round Icons:** Also replace the `ic_launcher_round.png` files in the same directories.

## 3. Biometric Support (Fingerprint)

Fingerprint and Face ID are already enabled in the code! To use it:
1.  Open your app.
2.  Go to **Configuration** (Settings).
3.  Look for the **Security** section.
4.  Enable **Biometrics authentication**.

## 4. Building your APK

Your GitHub Action is now fixed. Every time you push your changes to GitHub, it will automatically:
1.  Build all the required libraries.
2.  Create your custom APK.
3.  Upload the APK as an "Artifact" that you can download from the "Actions" tab in your repository.
