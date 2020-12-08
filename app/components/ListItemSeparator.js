import React from "react";
import colours from "../config/colours";
import { StyleSheet, View } from "react-native";

function ListItemSeparator() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		backgroundColor: colours.light,
		height: 1,
		width: "100%",
	},
});

export default ListItemSeparator;
