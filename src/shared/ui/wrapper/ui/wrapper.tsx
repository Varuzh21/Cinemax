import type { ReactNode } from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet, View } from 'react-native';

interface WrapperProps extends ViewProps {
	children: ReactNode;
}

export function Wrapper({ children, style, ...props }: WrapperProps) {
	return (
		<View style={[style, styles.container]} {...props}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 24,
	},
});
