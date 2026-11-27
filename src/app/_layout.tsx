import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SessionProvider, useSession } from '@/entities/session';
import { useIsOnboarded } from '@/features/onboarding';
import { queryClient } from '@/shared/api';
import { FONT_SOURCES } from '@/shared/config/fonts';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [isFontsLoaded, fontError] = useFonts(FONT_SOURCES);

	const isReady = isFontsLoaded || fontError !== null;

	if (!isReady) {
		return null;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider>
				<RootNavigator />
			</SessionProvider>
		</QueryClientProvider>
	);
}

function RootNavigator() {
	const { isSignedIn } = useSession();
	const isOnboarded = useIsOnboarded();

	SplashScreen.hide();

	const shouldShowOnboarding = !isSignedIn && !isOnboarded;
	const shouldShowAuth = !isSignedIn && isOnboarded;

	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Protected guard={shouldShowOnboarding}>
				<Stack.Screen name='(onboarding)' />
			</Stack.Protected>

			<Stack.Protected guard={shouldShowAuth}>
				<Stack.Screen name='(auth)' />
			</Stack.Protected>

			<Stack.Protected guard={isSignedIn}>
				<Stack.Screen name='(app)' />
			</Stack.Protected>
		</Stack>
	);
}
