import { StyleSheet, View } from 'react-native';

import { Colors } from '@/shared/config/theme';

const INACTIVE_DOT_OPACITY = 0.32;

type CardPaginationProps = {
	count: number;
	activeIndex: number;
};

export function CardPagination({ count, activeIndex }: CardPaginationProps) {
	const dotIndexes = Array.from({ length: count }, (_, index) => index);

	return (
		<View style={styles.container} accessible={false}>
			{dotIndexes.map(index => (
				<View
					key={index}
					style={[styles.dot, index === activeIndex && styles.activeDot]}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: Colors.primary.blue,
		opacity: INACTIVE_DOT_OPACITY,
	},
	activeDot: {
		width: 32,
		opacity: 1,
	},
});
