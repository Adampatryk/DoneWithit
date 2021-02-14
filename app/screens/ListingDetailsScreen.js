import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import colours from "../config/colours";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const { title, price, imageUrl } = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{price}</AppText>
        <View style={styles.userContainer}>
          <ListItem />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 26,
  },
  subTitle: {
    color: colours.secondaryColour,
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
