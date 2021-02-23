import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import colours from "../config/colours";
import AppText from "./AppText";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.primaryColour,
    padding: 10,
  },
  text: {
    color: colours.white,
  },
});

export default OfflineNotice;
