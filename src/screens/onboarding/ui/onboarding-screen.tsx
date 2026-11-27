import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { completeOnboarding } from '@/features/onboarding';
import { FontWeights } from '@/shared/config/theme';

const PLACEHOLDER_COLORS = {
	text: '#1F1D2B',
	textSecondary: '#6B6B76',
	buttonBackground: '#1F1D2B',
	buttonLabel: '#FFFFFF',
} as const;

const PRESSED_OPACITY = 0.7;

export function OnboardingScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Text style={styles.title}>Welcome to Cinemax</Text>
				<Text style={styles.description}>
					Find movies you love and see what is playing now.
				</Text>
			</View>

			<Pressable
				accessibilityRole='button'
				onPress={completeOnboarding}
				style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			>
				<Text style={styles.buttonLabel}>Get started</Text>
			</Pressable>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingVertical: 24,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		gap: 12,
	},
	title: {
		fontWeight: FontWeights.semiBold,
		fontSize: 28,
		color: PLACEHOLDER_COLORS.text,
		textAlign: 'center',
	},
	description: {
		fontWeight: FontWeights.regular,
		fontSize: 16,
		lineHeight: 24,
		color: PLACEHOLDER_COLORS.textSecondary,
		textAlign: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 52,
		borderRadius: 26,
		backgroundColor: PLACEHOLDER_COLORS.buttonBackground,
	},
	pressed: {
		opacity: PRESSED_OPACITY,
	},
	buttonLabel: {
		fontWeight: FontWeights.medium,
		fontSize: 16,
		color: PLACEHOLDER_COLORS.buttonLabel,
	},
});
