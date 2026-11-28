import {
	Pressable,
	type PressableProps,
	type StyleProp,
	StyleSheet,
	Text,
	type ViewStyle,
} from 'react-native';

import { FONT_FAMILY } from '@/shared/config/fonts';
import { Colors, FontWeights } from '@/shared/config/theme';

const PRESSED_OPACITY = 0.7;
const DISABLED_OPACITY = 0.5;

interface ButtonProps extends Omit<PressableProps, 'children' | 'style'> {
	title: string;
	style?: StyleProp<ViewStyle>;
}

export function Button({ title, style, disabled, ...props }: ButtonProps) {
	return (
		<Pressable
			accessibilityRole='button'
			accessibilityState={{ disabled: !!disabled }}
			disabled={disabled}
			style={({ pressed }) => [
				styles.container,
				pressed && styles.pressed,
				disabled && styles.disabled,
				style,
			]}
			{...props}
		>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: 56,
		paddingHorizontal: 24,
		borderRadius: 32,
		backgroundColor: Colors.primary.blue,
	},
	pressed: {
		opacity: PRESSED_OPACITY,
	},
	disabled: {
		opacity: DISABLED_OPACITY,
	},
	title: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.medium,
		fontSize: 16,
		color: Colors.text.white,
	},
});
