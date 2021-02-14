import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/squares.json")}
    />
  );
};

export default ActivityIndicator;
