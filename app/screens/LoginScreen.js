import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "./../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppField,
  AppSubmitButton,
} from "./../components/forms";
import authApi from "../api/auth";
import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          visible={loginFailed}
          error={"Invalid email and/or password"}
        />
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
