import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  const navigator = useNavigation();
  return (
    <React.Fragment>
      <ImageBackground
        blurRadius={5}
        source={require("../assets/background.jpg")}
        style={styles.imageBackground}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton onPress={() => navigator.navigate("Login")}>
            Login
          </AppButton>
          <AppButton
            onPress={() => navigator.navigate("Register")}
            colour="secondaryColour"
          >
            Register
          </AppButton>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-end",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 30,
    fontWeight: "200",
    margin: 20,
    textTransform: "capitalize",
  },
});

export default WelcomeScreen;
