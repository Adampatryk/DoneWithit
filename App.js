import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import MainNavigator from "./app/navigation/MainNavigator";

import { create } from "apisauce";

export default function App() {
  return <MainNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
