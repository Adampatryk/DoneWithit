import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../config/colours";

function Icon({
	name,
	size = 40,
	iconColor = colours.white,
	backgroundColor = colours.black,
}) {
	return (
		<View
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: backgroundColor,
			}}
		>
			<MaterialCommunityIcons
				name={name}
				color={iconColor}
				size={size / 2}
			/>
		</View>
	);
}

export default Icon;
