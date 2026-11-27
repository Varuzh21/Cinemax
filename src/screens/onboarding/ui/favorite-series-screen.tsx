import { completeOnboarding } from '@/features/onboarding';

import { ONBOARDING_STEP_COUNT } from '../config/steps';

import { Card } from './card';

import { OnboardingLayout } from './onboarding-layout';

export function FavoriteSeriesScreen() {
	return (
		<OnboardingLayout
			illustrationSource={require('@/shared/assets/images/onboarding/favorite-series.png')}
		>
			<Card step={2} count={ONBOARDING_STEP_COUNT} onNext={completeOnboarding}>
				<Card.Title>
					Our service brings together your favorite series
				</Card.Title>
				<Card.Description>
					Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
					laoreet id sem semper parturient.
				</Card.Description>
			</Card>
		</OnboardingLayout>
	);
}
