import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import * as Progress from "react-native-progress";
import colours from "../config/colours";

const UploadListingScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colours.primaryColour} progress={progress} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", flex: 1 },
  animation: { width: "40%" },
});

export default UploadListingScreen;
