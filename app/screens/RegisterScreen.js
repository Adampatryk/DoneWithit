import React, { useState } from "react";
import * as Yup from "yup";

import {
  AppField,
  AppForm,
  AppSubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";
import authApi from "../api/auth";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState(false);

  const handleRegister = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <>
      {/* <ActivityIndicator visible={true} /> */}
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <ErrorMessage visible={error} error={error} />
          <AppField
            name="name"
            placeholder="Name"
            icon="account"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppField
            name="email"
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
          />
          <AppField
            name="password"
            secureTextEntry
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppSubmitButton name="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

export default RegisterScreen;
