import React, { useState, useEffect, useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const flatList = useRef();

  const handleImageChanged = (uri) => {
    imageUris.indexOf(uri) > -1 ? onRemoveImage(uri) : onAddImage(uri);
  };

  const renderListImage = ({ item }) => (
    <ImageInput
      key={item}
      imageUri={item}
      onImageChanged={(imageUri) => handleImageChanged(imageUri)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        onContentSizeChange={() => flatList.current.scrollToEnd()}
        ref={flatList}
        data={[...imageUris, null]}
        renderItem={renderListImage}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
});

export default ImageInputList;
