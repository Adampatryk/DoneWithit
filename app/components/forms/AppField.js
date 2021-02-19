import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppField = ({ name, width, ...other }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...other}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(value) => setFieldValue(name, value)}
        value={values[name]}
        width={width}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AppField;
