import { NativeTabs } from "expo-router/native-tabs";

import { useTheme } from "@/shared/lib/use-theme";

export default function TabsLayout() {
	const theme = useTheme();

	return (
		<NativeTabs
			backgroundColor={theme.background}
			indicatorColor={theme.backgroundElement}
			labelStyle={{ selected: { color: theme.text } }}
		>
			<NativeTabs.Trigger name="index">
				<NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
				<NativeTabs.Trigger.Icon
					src={require("@/shared/assets/images/tabIcons/home.png")}
					renderingMode="template"
				/>
			</NativeTabs.Trigger>

			<NativeTabs.Trigger name="explore">
				<NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
				<NativeTabs.Trigger.Icon
					src={require("@/shared/assets/images/tabIcons/explore.png")}
					renderingMode="template"
				/>
			</NativeTabs.Trigger>
		</NativeTabs>
	);
}
