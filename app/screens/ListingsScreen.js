import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import colours from "../config/colours";
import { useNavigation } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

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
  const navigator = useNavigation();
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigator.navigate("ListingsDetails", {
                title: item.title,
                price: item.price,
                image: item.image,
              })
            }
          >
            <Card title={item.title} subTitle={item.price} image={item.image} />
          </TouchableWithoutFeedback>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    backgroundColor: colours.light,
  },
});

export default ListingsScreen;
