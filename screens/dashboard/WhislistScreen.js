import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WhislistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>WhislistScreen</Text>
    </View>
  );
};

export default WhislistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
