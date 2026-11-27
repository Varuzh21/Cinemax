import type { NativeStackNavigationOptions } from 'expo-router';

export const STACK_SCREEN_OPTIONS = {
	headerShown: false,
	statusBarStyle: 'light',
} as const satisfies NativeStackNavigationOptions;
