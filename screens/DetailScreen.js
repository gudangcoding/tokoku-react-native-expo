import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
  const { nama, harga, deskripsi, gambar } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: gambar }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={(styles.iconContainer, { flexDirection: "column" })}>
          <Text numberOfLines={1} style={styles.nama}>
            {nama}
          </Text>
          <Text style={styles.harga}>Rp {harga}</Text>
        </View>
        <View style={(styles.iconContainer, { flexDirection: "row" })}>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.deskripsi}>{deskripsi}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  nama: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 10,
  },
  harga: {
    fontSize: 18,
    color: "#666",
  },
  deskripsi: {
    fontSize: 16,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
