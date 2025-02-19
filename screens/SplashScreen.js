import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(interval);
      const token = AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Login");
      }
    }
    return () => clearInterval(interval);
  }, [timer, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon.png")} style={styles.logo} />
      <Text style={styles.text}>Tokoku</Text>
      <Text style={styles.text}>Redirecting in {timer} seconds</Text>
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
});
