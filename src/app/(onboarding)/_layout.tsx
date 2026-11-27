import { Stack } from 'expo-router';
import { STACK_SCREEN_OPTIONS } from '@/shared/config/navigation';

export const unstable_settings = {
	anchor: 'index',
};

export default function OnboardingLayout() {
	return (
		<Stack screenOptions={STACK_SCREEN_OPTIONS}>
			<Stack.Screen name='index' />
			<Stack.Screen name='step-2' />
			<Stack.Screen name='step-3' />
		</Stack>
	);
}
