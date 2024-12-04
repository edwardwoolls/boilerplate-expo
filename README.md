# Expo App with NativeWind

A modern React Native app built with Expo, using NativeWind for styling.

## Features

- 🎨 NativeWind (Tailwind CSS for React Native)
- 📱 Expo Router for navigation
- 🔒 TypeScript for type safety
- 💅 Prettier for code formatting
- 🚨 ESLint for code quality
- 🪝 Git hooks with Husky
- 📋 Conventional commits

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Run on specific platforms:

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android
   ```

## Development

- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript checks
- `npm run validate` - Run all checks

## Git Workflow

This project uses conventional commits. Commit messages should follow the pattern:

```bash
type(scope?): subject
```

## Examples

- `feat: add authentication`
- `fix: resolve navigation bug`
- `docs: update README`

## Project Structure

- `app/` - App screens and navigation
- `components/` - Reusable components
- `hooks/` - Custom React hooks
- `constants/` - App constants
