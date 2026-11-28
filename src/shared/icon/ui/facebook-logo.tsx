import type { ColorValue } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/shared/config/theme';

const DEFAULT_SIZE = 24;

type FacebookLogoProps = {
	size?: number;
	color?: ColorValue;
};

export function FacebookLogo({
	size = DEFAULT_SIZE,
	color = Colors.text.white,
}: FacebookLogoProps) {
	return (
		<Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
			<Path
				d='M18.036 8.53832H13.6586V6.40452C13.6586 6.40452 13.4135 4.37536 14.8322 4.37536C16.4356 4.37536 17.7159 4.37536 17.7159 4.37536V1.22846e-06H12.8061C12.8061 1.22846e-06 8.69754 -0.017453 8.69754 4.1086C8.69754 4.99495 8.69345 6.60864 8.68727 8.53832H5.86816V12.0611H8.68004C8.66363 17.6624 8.64413 23.9048 8.64413 23.9048H13.6586V12.0611H16.968L18.036 8.53832Z'
				fill={color}
			/>
		</Svg>
	);
}
