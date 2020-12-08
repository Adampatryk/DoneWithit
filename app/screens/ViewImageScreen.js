import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import colours from "../config/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color="white" size={35} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons
					name="trash-can-outline"
					color="white"
					size={35}
				/>
			</View>
			<Image
				resizeMode="contain"
				style={styles.image}
				source={require("../assets/chair.jpg")}
			></Image>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colours.black,
		alignItems: "center",
		width: "100%",
	},
	closeIcon: {
		position: "absolute",
		top: 40,
		left: 30,
	},
	deleteIcon: {
		position: "absolute",
		top: 40,
		right: 30,
	},
	image: {
		height: "100%",
		width: "100%",
	},
});

export default ViewImageScreen;
