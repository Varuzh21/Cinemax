import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FONT_FAMILY } from '@/shared/config/fonts';
import { Colors, FontWeights } from '@/shared/config/theme';

import { CardNextButton } from './card-next-button';
import { CardPagination } from './card-pagination';

type CardProps = PropsWithChildren<{
	step: number;
	count: number;
	onNext: () => void;
}>;

function CardRoot({ step, count, onNext, children }: CardProps) {
	const isLastStep = step === count - 1;
	const progress = (step + 1) / count;

	return (
		<View style={styles.container}>
			<View style={styles.header}>{children}</View>

			<View style={styles.footer}>
				<CardPagination count={count} activeIndex={step} />
				<CardNextButton
					progress={progress}
					accessibilityLabel={isLastStep ? 'Get started' : 'Next'}
					onPress={onNext}
				/>
			</View>
		</View>
	);
}

function CardTitle({ children }: PropsWithChildren) {
	return <Text style={styles.title}>{children}</Text>;
}

function CardDescription({ children }: PropsWithChildren) {
	return <Text style={styles.description}>{children}</Text>;
}

export const Card = Object.assign(CardRoot, {
	Title: CardTitle,
	Description: CardDescription,
});

const styles = StyleSheet.create({
	container: {
		gap: 40,
		padding: 32,
		borderRadius: 32,
		backgroundColor: Colors.text.black,
	},
	header: {
		gap: 14,
	},
	title: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.semiBold,
		fontSize: 18,
		lineHeight: 29,
		color: Colors.text.white,
		textAlign: 'center',
	},
	description: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.medium,
		fontSize: 14,
		lineHeight: 17,
		color: Colors.text.grey,
		textAlign: 'center',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});
