import { View, type ViewProps } from "react-native";
import { useTheme } from "@/shared/lib/use-theme";
import type { ThemeColor } from "@/shared/styles/theme";

export interface ThemedViewProps extends ViewProps {
	type?: ThemeColor;
}

export function ThemedView({ style, type, ...otherProps }: ThemedViewProps) {
	const theme = useTheme();

	return (
		<View
			style={[{ backgroundColor: theme[type ?? "background"] }, style]}
			{...otherProps}
		/>
	);
}
