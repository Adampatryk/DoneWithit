import React from "react";
import { Image, View } from "react-native";
import { StyleSheet } from "react-native";
import colours from "../config/colours";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
	return (
		<View style={styles.card}>
			<Image style={styles.image} source={image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: "100%",
		backgroundColor: "white",
		marginBottom: 20,
		overflow: "hidden",
		borderRadius: 20,
	},
	image: {
		width: "100%",
		height: 200,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		marginBottom: 5,
	},
	subTitle: {
		color: colours.secondaryColour,
		fontWeight: "bold",
	},
});

export default Card;
