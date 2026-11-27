import type { FontFamilyDefinition } from 'expo-font';

import { FontWeights } from './theme';

export const FONT_SOURCES = [
	{
		fontFamily: 'Montserrat',
		fontDefinitions: [
			{
				path: require('@/shared/assets/font/Regular.ttf'),
				weight: FontWeights.regular,
			},
			{
				path: require('@/shared/assets/font/Medium.ttf'),
				weight: FontWeights.medium,
			},
			{
				path: require('@/shared/assets/font/SemiBold.ttf'),
				weight: FontWeights.semiBold,
			},
		],
	},
] satisfies FontFamilyDefinition[];
