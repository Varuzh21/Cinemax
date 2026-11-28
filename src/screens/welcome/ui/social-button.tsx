import type { ReactNode } from 'react';
import { type ColorValue, Pressable, StyleSheet } from 'react-native';

const SIZE = 68;
const PRESSED_OPACITY = 0.7;

type SocialButtonProps = {
	accessibilityLabel: string;
	backgroundColor: ColorValue;
	icon?: ReactNode;
	onPress?: () => void;
};

export function SocialButton({
	accessibilityLabel,
	backgroundColor,
	icon,
	onPress,
}: SocialButtonProps) {
	return (
		<Pressable
			accessibilityRole='button'
			accessibilityLabel={accessibilityLabel}
			onPress={onPress}
			style={({ pressed }) => [
				styles.container,
				{ backgroundColor },
				pressed && styles.pressed,
			]}
		>
			{icon}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: SIZE,
		height: SIZE,
		borderRadius: SIZE / 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	pressed: {
		opacity: PRESSED_OPACITY,
	},
});
