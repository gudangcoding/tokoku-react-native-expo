import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
