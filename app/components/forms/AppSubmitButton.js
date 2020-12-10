import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../AppButton";

const AppSubmitButton = ({ name, ...other }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton {...other} onPress={handleSubmit}>
      {name}
    </AppButton>
  );
};

const styles = StyleSheet.create({});

export default AppSubmitButton;
