import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../../config/colours";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can"
        size={35}
        color={colours.white}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default ListItemDeleteAction;
