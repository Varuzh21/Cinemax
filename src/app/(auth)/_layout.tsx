import { Stack } from 'expo-router';

export const unstable_settings = {
	anchor: 'index',
};

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name='index' />
		</Stack>
	);
}
