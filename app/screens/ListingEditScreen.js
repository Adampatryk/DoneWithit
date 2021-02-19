import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import {
  AppField,
  AppForm,
  AppSubmitButton,
  AppFormPicker,
  FormImagePicker,
} from "../components/forms";
import Screen from "../components/Screen";
import colours from "../config/colours";
import defaultStyles from "../config/styles";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadListingScreen from "./UploadListingScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array()
    .of(Yup.string())
    .min(0, "There must be at least one image")
    .label("Images"),
  title: Yup.string().min(1).required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categoryValues = [
  {
    value: "1",
    label: "Furniture",
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    value: "2",
    label: "Cars",
    backgroundColor: "#fd9644",
    icon: "car",
  },
  {
    value: "3",
    label: "Cameras",
    backgroundColor: "#fed330",
    icon: "camera",
  },
  {
    value: "4",
    label: "Games",
    backgroundColor: "#26de81",
    icon: "cards",
  },
  {
    value: "5",
    label: "Clothing",
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
  },
  {
    value: "6",
    label: "Sports",
    backgroundColor: "#45aaf2",
    icon: "basketball",
  },
  {
    value: "7",
    label: "Movies & Music",
    backgroundColor: "#4b7bec",
    icon: "headphones",
  },
  {
    value: "8",
    label: "Books",
    backgroundColor: "#4b7bec",
    icon: "book",
  },
  {
    value: "9",
    label: "Other",
    backgroundColor: colours.medium,
  },
];

const ListingEditScreen = () => {
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);

    const response = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!response.ok) {
      setUploadVisible(false);
      return alert("Could not save the lisitng...");
    }

    resetForm();
  };

  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  return (
    <Screen>
      <UploadListingScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
          width={120}
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormPicker
          items={categoryValues}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
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
