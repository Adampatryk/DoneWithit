import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Button, TouchableOpacity } from "react-native";
import colours from "../config/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const TabBarButton = ({ height = 80, width = 80 }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate("ListingsEdit")}
      style={[
        styles.container,
        { width: width, height: height, borderRadius: width / 2 },
      ]}
    >
      <MaterialCommunityIcons
        color={colours.white}
        size={width / 1.75}
        name="plus-circle"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    borderColor: colours.white,
    borderWidth: 10,
    bottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TabBarButton;
