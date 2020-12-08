import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colours from "../config/colours";
import AppText from "./AppText";

function ListItem({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	IconComponent,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colours.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && (
							<AppText style={styles.subTitle}>
								{subTitle}
							</AppText>
						)}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colours.white,
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	title: {
		fontWeight: "500",
	},
	subTitle: {
		color: colours.medium,
	},
});

export default ListItem;
