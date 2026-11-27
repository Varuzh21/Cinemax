import { router } from 'expo-router';

import { ONBOARDING_STEP_COUNT } from '../config/steps';
import { Card } from './card';
import { OnboardingLayout } from './onboarding-layout';

export function AdFreeScreen() {
	return (
		<OnboardingLayout
			illustrationSource={require('@/shared/assets/images/onboarding/ad-free.png')}
		>
			<Card
				step={1}
				count={ONBOARDING_STEP_COUNT}
				onNext={() => router.push('/step-3')}
			>
				<Card.Title>Offers ad-free viewing of high quality</Card.Title>
				<Card.Description>
					Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
					laoreet id sem semper parturient.
				</Card.Description>
			</Card>
		</OnboardingLayout>
	);
}
