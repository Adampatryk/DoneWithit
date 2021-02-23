import React from "react";
import { StyleSheet, View } from "react-native";

const OfflineNotice = () => {
  return (
    <View style={styles.container}>
      <Text>No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default OfflineNotice;
