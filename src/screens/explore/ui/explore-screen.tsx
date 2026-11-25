import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/shared/lib/use-theme';
import {
	BottomTabInset,
	MaxContentWidth,
	Spacing,
} from '@/shared/styles/theme';
import { Collapsible } from '@/shared/ui/collapsible';
import { ThemedText } from '@/shared/ui/themed-text';
import { ThemedView } from '@/shared/ui/themed-view';

export function ExploreScreen() {
	const safeAreaInsets = useSafeAreaInsets();
	const insets = {
		...safeAreaInsets,
		bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
	};
	const theme = useTheme();

	const contentPlatformStyle = Platform.select({
		android: {
			paddingTop: insets.top,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			paddingBottom: insets.bottom,
		},
	});

	return (
		<ScrollView
			style={[styles.scrollView, { backgroundColor: theme.background }]}
			contentInset={insets}
			contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
		>
			<ThemedView style={styles.container}>
				<ThemedView style={styles.titleContainer}>
					<ThemedText type='subtitle'>Explore</ThemedText>
					<ThemedText style={styles.centerText} themeColor='textSecondary'>
						This starter app includes example{'\n'}code to help you get started.
					</ThemedText>

					<Link href='https://docs.expo.dev' asChild>
						<Pressable style={({ pressed }) => pressed && styles.pressed}>
							<ThemedView type='backgroundElement' style={styles.linkButton}>
								<ThemedText type='link'>Expo documentation</ThemedText>
								<SymbolView
									tintColor={theme.text}
									name={{ ios: 'arrow.up.right.square', android: 'link' }}
									size={12}
								/>
							</ThemedView>
						</Pressable>
					</Link>
				</ThemedView>

				<ThemedView style={styles.sectionsWrapper}>
					<Collapsible title='File-based routing'>
						<ThemedText type='small'>
							This app has two screens:{' '}
							<ThemedText type='code'>src/app/(tabs)/index.tsx</ThemedText> and{' '}
							<ThemedText type='code'>src/app/(tabs)/explore.tsx</ThemedText>
						</ThemedText>
						<ThemedText type='small'>
							The layout file in{' '}
							<ThemedText type='code'>src/app/(tabs)/_layout.tsx</ThemedText>{' '}
							sets up the tab navigator.
						</ThemedText>
						<Link href='https://docs.expo.dev/router/introduction'>
							<ThemedText type='linkPrimary'>Learn more</ThemedText>
						</Link>
					</Collapsible>

					<Collapsible title='Images'>
						<ThemedText type='small'>
							For static images, you can use the{' '}
							<ThemedText type='code'>@2x</ThemedText> and{' '}
							<ThemedText type='code'>@3x</ThemedText> suffixes to provide files
							for different screen densities.
						</ThemedText>
						<Image
							source={require('@/shared/assets/images/react-logo.png')}
							style={styles.imageReact}
						/>
						<Link href='https://reactnative.dev/docs/images'>
							<ThemedText type='linkPrimary'>Learn more</ThemedText>
						</Link>
					</Collapsible>

					<Collapsible title='Light and dark mode components'>
						<ThemedText type='small'>
							This template has light and dark mode support. The{' '}
							<ThemedText type='code'>useColorScheme()</ThemedText> hook lets
							you inspect what the user&apos;s current color scheme is, and so
							you can adjust UI colors accordingly.
						</ThemedText>
						<Link href='https://docs.expo.dev/develop/user-interface/color-themes/'>
							<ThemedText type='linkPrimary'>Learn more</ThemedText>
						</Link>
					</Collapsible>

					<Collapsible title='Animations'>
						<ThemedText type='small'>
							This template includes an example of an animated component. The{' '}
							<ThemedText type='code'>src/shared/ui/collapsible.tsx</ThemedText>{' '}
							component uses the powerful{' '}
							<ThemedText type='code'>react-native-reanimated</ThemedText>{' '}
							library to animate opening this hint.
						</ThemedText>
					</Collapsible>
				</ThemedView>
			</ThemedView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	contentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	container: {
		maxWidth: MaxContentWidth,
		flexGrow: 1,
	},
	titleContainer: {
		gap: Spacing.three,
		alignItems: 'center',
		paddingHorizontal: Spacing.four,
		paddingVertical: Spacing.six,
	},
	centerText: {
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.7,
	},
	linkButton: {
		flexDirection: 'row',
		paddingHorizontal: Spacing.four,
		paddingVertical: Spacing.two,
		borderRadius: Spacing.five,
		justifyContent: 'center',
		gap: Spacing.one,
		alignItems: 'center',
	},
	sectionsWrapper: {
		gap: Spacing.five,
		paddingHorizontal: Spacing.four,
		paddingTop: Spacing.three,
	},
	imageReact: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
});
