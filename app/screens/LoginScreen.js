import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { AppForm, AppField, AppSubmitButton } from "./../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppField
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          name="email"
        />
        <AppField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          icon="lock"
          placeholder="Password"
          name="password"
        />

        <AppSubmitButton name="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  logo: { width: 100, height: 100, alignSelf: "center", margin: 50 },
});

export default LoginScreen;
