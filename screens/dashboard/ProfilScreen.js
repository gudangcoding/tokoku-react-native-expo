import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfilScreen</Text>
    </View>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
