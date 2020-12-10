import React from "react";
import * as Yup from "yup";
import {
  AppField,
  AppForm,
  AppSubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().min(1).required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categoryValues = [
  {
    value: "1",
    label: "Gaming",
  },
  {
    value: "2",
    label: "Furniture",
  },
];

const ListingEditScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={() => console.log("submitted")}
        validationSchema={validationSchema}
      >
        <AppField
          name="title"
          maxLength={255}
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormPicker
          items={categoryValues}
          name="category"
          placeholder="Category"
        />
        <AppField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppSubmitButton name="Post" />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;
