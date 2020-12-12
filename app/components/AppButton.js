import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colours from "../config/colours";

const AppButton = ({ children, onPress, colour = "primaryColour" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colours[colour] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primaryColour,
    borderRadius: 20,
    width: "100%",
    height: 50,
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default AppButton;
