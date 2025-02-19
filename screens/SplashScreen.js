import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonCustom from "../components/Form/ButtonCustom";

const SplashScreen = () => {
  return (
    <View>
      <ButtonCustom title="SplashScreen" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
