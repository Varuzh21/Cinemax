import { useMMKVBoolean } from 'react-native-mmkv';

import { storage } from '@/shared/lib/storage';
import { ONBOARDING_COMPLETED_KEY } from './onboarding-storage';

export function useIsOnboarded() {
	const [isOnboarded] = useMMKVBoolean(ONBOARDING_COMPLETED_KEY, storage);

	return isOnboarded ?? false;
}
