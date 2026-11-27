import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useMemo,
} from 'react';

import { type AuthTokens, saveTokens } from '@/shared/api';

type SessionContextValue = {
	isSignedIn: boolean;
	signIn: (payload: AuthTokens) => Promise<void>;
	signOut: () => Promise<void>;
};

export const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: PropsWithChildren) {
	const isSignedIn = false;

	const signIn = useCallback(async (tokens: AuthTokens) => {
		await saveTokens(tokens);
	}, []);

	const signOut = useCallback(async () => {}, []);

	const value = useMemo<SessionContextValue>(
		() => ({ signIn, signOut, isSignedIn }),
		[signIn, signOut],
	);

	return <SessionContext value={value}>{children}</SessionContext>;
}
