import { router } from 'expo-router';

import { ONBOARDING_STEP_COUNT } from '../config/steps';
import { Card } from './card';
import { OnboardingLayout } from './onboarding-layout';

export function StreamingScreen() {
	return (
		<OnboardingLayout
			imageSource={require('@/shared/assets/images/onboarding/poster-collage.png')}
		>
			<Card
				step={0}
				count={ONBOARDING_STEP_COUNT}
				onNext={() => router.push('/step-2')}
			>
				<Card.Title>
					The biggest international and local film streaming
				</Card.Title>
				<Card.Description>
					Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,
					laoreet id sem semper parturient.
				</Card.Description>
			</Card>
		</OnboardingLayout>
	);
}
