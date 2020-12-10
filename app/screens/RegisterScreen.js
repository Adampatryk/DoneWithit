import React from "react";
import * as Yup from "yup";

import { AppField, AppForm, AppSubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={() => console.log("submitted")}
        validationSchema={validationSchema}
      >
        <AppField
          name="name"
          placeholder="Name"
          icon="account"
          placeholder="Email"
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
  );
};

export default RegisterScreen;
