import React, { useEffect } from "react";
import { StyleSheet, Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import colours from "../config/colours";
import { TouchableOpacity } from "react-native-gesture-handler";

const ImageInput = ({ imageUri, onImageChanged }) => {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!result.granted) alert("You need to give camera roll permisisons");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        {
          onImageChanged && onImageChanged(result.uri);
        }
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  const deleteImage = () => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to remove this image?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Ok", onPress: () => onImageChanged(imageUri) },
      ],
      { cancelable: true }
    );
  };

  const onPress = () => {
    imageUri ? deleteImage() : selectImage();
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {!imageUri && <MaterialCommunityIcons name="camera" size={50} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colours.light,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ImageInput;
