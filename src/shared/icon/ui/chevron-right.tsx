import type { ColorValue } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

import { Colors } from '@/shared/config/theme';

const DEFAULT_SIZE = 24;
const STROKE_WIDTH = 2;

type ChevronRightIconProps = {
	size?: number;
	color?: ColorValue;
};

export function ChevronRight({
	size = DEFAULT_SIZE,
	color = Colors.text.white,
}: ChevronRightIconProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 24 24'>
			<Polyline
				points='9 6 15 12 9 18'
				stroke={color}
				strokeWidth={STROKE_WIDTH}
				strokeLinecap='round'
				strokeLinejoin='round'
				fill='none'
			/>
		</Svg>
	);
}
