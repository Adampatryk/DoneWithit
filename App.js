import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import MainNavigator from "./app/navigation/MainNavigator";

import { create } from "apisauce";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return <AuthNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
