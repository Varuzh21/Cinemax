import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Path, Polyline } from 'react-native-svg';

import { Colors } from '@/shared/config/theme';

import { buildRoundedSquarePath } from '../lib/build-rounded-square-path';

const RING_SIZE = 80;
const RING_STROKE_WIDTH = 3;
const RING_CORNER_RADIUS = 28;
const BUTTON_SIZE = 56;
const PRESSED_OPACITY = 0.7;

const RING_INSET = RING_STROKE_WIDTH / 2;
const RING_SIDE = RING_SIZE - RING_STROKE_WIDTH;
const RING_STRAIGHT_LENGTH = RING_SIDE - 2 * RING_CORNER_RADIUS;
const RING_PERIMETER =
	4 * RING_STRAIGHT_LENGTH + 2 * Math.PI * RING_CORNER_RADIUS;

const RING_PATH = buildRoundedSquarePath(
	RING_INSET,
	RING_SIDE,
	RING_CORNER_RADIUS,
);

type CardNextButtonProps = {
	progress: number;
	accessibilityLabel: string;
	onPress: () => void;
};

export function CardNextButton({
	progress,
	accessibilityLabel,
	onPress,
}: CardNextButtonProps) {
	const progressLength = RING_PERIMETER * Math.min(Math.max(progress, 0), 1);

	return (
		<View style={styles.container}>
			<Svg width={RING_SIZE} height={RING_SIZE} style={StyleSheet.absoluteFill}>
				<Path
					d={RING_PATH}
					stroke={Colors.primary.soft}
					strokeWidth={RING_STROKE_WIDTH}
					fill='none'
				/>
				<Path
					d={RING_PATH}
					stroke={Colors.primary.blue}
					strokeWidth={RING_STROKE_WIDTH}
					strokeDasharray={[progressLength, RING_PERIMETER]}
					strokeLinecap='round'
					fill='none'
				/>
			</Svg>

			<Pressable
				accessibilityRole='button'
				accessibilityLabel={accessibilityLabel}
				onPress={onPress}
				style={({ pressed }) => [styles.button, pressed && styles.pressed]}
			>
				<Svg width={24} height={24} viewBox='0 0 24 24'>
					<Polyline
						points='9 6 15 12 9 18'
						stroke={Colors.primary.dark}
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						fill='none'
					/>
				</Svg>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: RING_SIZE,
		height: RING_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primary.blue,
	},
	pressed: {
		opacity: PRESSED_OPACITY,
	},
});
