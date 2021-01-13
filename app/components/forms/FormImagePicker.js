import React from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { touched, errors, values, setFieldValue } = useFormikContext();

  const handleAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemoveImage = (uriToDelete) => {
    setFieldValue(
      name,
      values[name].filter((uri) => uri !== uriToDelete)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
