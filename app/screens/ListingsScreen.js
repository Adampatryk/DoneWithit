import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import colours from "../config/colours";

const listings = [
	{
		id: 1,
		title: "Couch for sale",
		price: "$100",
		image: require("../assets/couch.jpg"),
	},
	{
		id: 2,
		title: "Red jacket for sale",
		price: "$50",
		image: require("../assets/jacket.jpg"),
	},
];

function ListingsScreen(props) {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={item.price}
						image={item.image}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 30,
		paddingTop: 50,
		backgroundColor: colours.light,
	},
});

export default ListingsScreen;
