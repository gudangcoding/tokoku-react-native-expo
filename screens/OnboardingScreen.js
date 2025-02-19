import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "Temukan produk kesukaanmu",
      description: "Cari produk yang kamu inginkan disini",
      image: require("../assets/icon.png"),
    },
    {
      title: "Pesan dengan mudah",
      description: "Kamu dapat memesan produk dengan mudah",
      image: require("../assets/icon.png"),
    },
    {
      title: "Pantau kemajuanmu",
      description: "Kamu dapat memantau kemajuan pesananmu",
      image: require("../assets/icon.png"),
    },
  ];

  const handleSkip = () => {
    navigation.navigate("Login");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={slides[currentIndex].image}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.description}>
          {slides[currentIndex].description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleNext}
          label={currentIndex === slides.length - 1 ? "Mulai" : "Lanjut"}
        />
        <Button
          mode="text"
          style={styles.button}
          onPress={handleSkip}
          label="Lewati"
        />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});
