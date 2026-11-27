import { Image, type ImageProps } from 'expo-image';
import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/shared/config/theme';
import { Wrapper } from '@/shared/ui/wrapper';

type OnboardingLayoutProps = PropsWithChildren<{
	imageSource?: ImageProps['source'];
	illustrationSource?: ImageProps['source'];
}>;

export function OnboardingLayout({
	imageSource,
	illustrationSource,
	children,
}: OnboardingLayoutProps) {
	return (
		<View style={styles.container}>
			{imageSource && (
				<Image
					source={imageSource}
					style={StyleSheet.absoluteFill}
					contentFit='cover'
					accessible={false}
				/>
			)}

			<SafeAreaView style={styles.safeArea}>
				{illustrationSource && (
					<Image
						source={illustrationSource}
						style={styles.illustration}
						contentFit='contain'
						accessible={false}
					/>
				)}

				<Wrapper>{children}</Wrapper>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary.dark,
	},
	safeArea: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	illustration: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
