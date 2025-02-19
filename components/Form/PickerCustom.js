import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const useImagePicker = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access camera is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return { image, pickImage, takePhoto };
};

const ImageUpload = () => {
  const { image, pickImage, takePhoto } = useImagePicker();

  return (
    <View>
      <Button title={galleryTitle} onPress={pickImage} />
      <Button title={photoTitle} onPress={takePhoto} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default ImageUpload;
