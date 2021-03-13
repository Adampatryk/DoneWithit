import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colours from "../config/colours";
import ListItem from "../components/lists/ListItem";
import useApi from "../hooks/useApi";
import userApi from "../api/users";
import SendMessageComponent from "../components/SendMessageComponent";
import listings from "../api/listings";

function ListingDetailsScreen({ route }) {
  const { listingId, title, price, images, userId } = route.params;
  const { data, request } = useApi(userApi.get, userId);

  useEffect(() => {
    request(userId);
    console.log(data);
  }, []);

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: images[0].thumbnailUrl }}
        uri={images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{`£${price}`}</AppText>
        <View style={styles.userContainer}>
          <ListItem title={data.name} subTitle={data.email} />
          <SendMessageComponent listingId={listingId} />
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
