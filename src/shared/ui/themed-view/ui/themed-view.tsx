import { StyleSheet } from 'react-native';

import {
	SafeAreaView,
	type SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { Colors } from '@/shared/config/theme';

export function ThemedView({ style, ...props }: SafeAreaViewProps) {
	return <SafeAreaView style={[styles.container, style]} {...props} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.primary.dark,
	},
});
