import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WhistlistScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      nama: "Produk 1",
      harga: 100000,
      gambar:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 2,
      nama: "Produk 2",
      harga: 200000,
      gambar:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 3,
      nama: "Produk 3",
      harga: 300000,
      gambar:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
    {
      id: 4,
      nama: "Produk 4",
      harga: 400000,
      gambar:
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.produkItem}
      onPress={() =>
        navigation.navigate("DetailScreen", {
          nama: item.nama,
          harga: item.harga,
          deskripsi: "Deskripsi produk",
          gambar: item.gambar,
        })
      }
    >
      <View style={styles.produkDetail}>
        <Image source={{ uri: item.gambar }} style={styles.produkImage} />
      </View>
      <View style={styles.produkDetail}>
        <Image
          source={{
            uri: "https://img.icons8.com/ios-glyphs/30/000000/like.png",
          }}
          style={styles.icon}
        />
        <TouchableOpacity style={styles.action}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png",
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Text style={styles.produkNama}>{item.nama}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Text style={styles.produkHarga}>Rp {item.harga}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Cari produk Whistlist"
        placeholderTextColor="#666"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WhistlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  produkItem: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },

  produkDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  produkImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  produkNama: {
    fontSize: 16,
    color: "#666",
  },
  produkHarga: {
    fontSize: 16,
    color: "#666",
  },
  icon: {
    width: 20,
    height: 20,
  },
  action: {
    marginLeft: 10,
  },
});
