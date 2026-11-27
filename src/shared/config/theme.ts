import type { TextStyle } from 'react-native';

export const Colors = {
	primary: {
		dark: '#1F1D2B',
		soft: '#252836',
		blue: '#12CDD9',
	},
	secondary: {
		green: '#22B07D',
		orange: '#FF8700',
		red: '#FF7256',
	},
	text: {
		black: '#171725',
		white: '#FFFFFF',
		dark_grey: '#696974',
		white_grey: '#F1F1F5',
		grey: '#92929D',
		line_dark: '#EAEAEA',
	},
} as const;

export const FontWeights = {
	regular: '400',
	medium: '500',
	semiBold: '600',
} as const satisfies Record<string, TextStyle['fontWeight']>;
