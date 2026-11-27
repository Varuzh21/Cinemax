import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<View></View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
	},
});
