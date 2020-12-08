import React from "react";
import colours from "../config/colours";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "./../components/Icon";
import ListItemSeparator from "./../components/ListItemSeparator";

const menuItems = [
	{
		title: "My Listings",
		icon: {
			name: "menu",
			backgroundColor: colours.primaryColour,
		},
	},
	{
		title: "My Messages",
		icon: {
			name: "mail",
			backgroundColor: colours.secondaryColour,
		},
	},
];

function AccountScreen(props) {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Adam Kulpa"
					subTitle="adamkulpa16@gmail.com"
					image={require("../assets/couch.jpg")}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={styles.container}>
				<ListItem
					title="Logout"
					IconComponent={
						<Icon name="logout" backgroundColor="#ffe66d" />
					}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colours.light,
	},
	container: {
		marginVertical: 10,
	},
});

export default AccountScreen;
