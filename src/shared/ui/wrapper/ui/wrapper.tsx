import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

export function Wrapper({ children }: PropsWithChildren) {
	return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 24,
	},
});
