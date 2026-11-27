import { storage } from '@/shared/lib/storage';

export const ONBOARDING_COMPLETED_KEY = 'onboarding.v1.completed';

export function completeOnboarding() {
	storage.set(ONBOARDING_COMPLETED_KEY, true);
}
