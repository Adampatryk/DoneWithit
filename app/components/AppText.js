import React from "react";
import { Platform, Text, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style, ...rest }) {
  return (
    <Text {...rest} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}

export default AppText;
