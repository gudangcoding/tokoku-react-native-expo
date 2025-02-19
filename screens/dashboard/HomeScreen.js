import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const [selectedKategori, setSelectedKategori] = React.useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=100&id=106PofAoe3p7&format=png&color=000000",
            }}
            style={styles.profil}
          />
          <View style={styles.actions}>
            <TouchableOpacity style={styles.action}>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=9671&format=png&color=000000",
                }}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=11642&format=png&color=000000",
                }}
                style={styles.icon}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.action}>
              <Image
                source={{
                  uri: "https://img.icons8.com/?size=100&id=87&format=png&color=000000",
                }}
                style={styles.icon}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Cari produk"
            placeholderTextColor="#666"
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={styles.kategori}
        >
          {["Semua", "Pria", "Wanita", "Anak-anak", "Remaja", "Bayi"].map(
            (item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.kategoriItem,
                  selectedKategori === item && styles.kategoriItemActive,
                ]}
                onPress={() => setSelectedKategori(item)}
              >
                <Text style={styles.kategoriText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
        <View style={styles.produk}>
          {[
            {
              id: 1,
              nama: "Produk 1",
              harga: 100000,
              gambar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stavenn_Loriculus_galgulus_00.jpg/225px-Stavenn_Loriculus_galgulus_00.jpg",
            },
            {
              id: 2,
              nama: "Produk 2",
              harga: 200000,
              gambar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stavenn_Loriculus_galgulus_00.jpg/225px-Stavenn_Loriculus_galgulus_00.jpg",
            },
            {
              id: 3,
              nama: "Produk 3",
              harga: 300000,
              gambar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stavenn_Loriculus_galgulus_00.jpg/225px-Stavenn_Loriculus_galgulus_00.jpg",
            },
            {
              id: 4,
              nama: "Produk 4",
              harga: 400000,
              gambar:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Stavenn_Loriculus_galgulus_00.jpg/225px-Stavenn_Loriculus_galgulus_00.jpg",
            },
          ].map((item) => (
            <TouchableOpacity
              style={styles.produkItem}
              key={item.id}
              onPress={() =>
                navigation.navigate("DetailScreen", {
                  nama: item.nama,
                  harga: item.harga,
                  deskripsi:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                  gambar: item.gambar,
                })
              }
            >
              <View style={styles.produkDetail}>
                <Image
                  source={{ uri: item.gambar }}
                  style={styles.produkImage}
                />
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
                <Text style={styles.produkNama} numberOfLines={1}>
                  {item.nama.length > 30
                    ? `${item.nama.slice(0, 27)}...`
                    : item.nama}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                <Text style={styles.produkHarga}>Rp {item.harga}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 30,
  },
  profil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  actions: {
    flexDirection: "row",
  },
  action: {
    marginLeft: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  kategori: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  kategoriItem: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f2f2f2",
  },
  kategoriItemActive: {
    backgroundColor: "#007BFF",
  },
  kategoriText: {
    fontSize: 16,
    color: "#333",
  },
  produk: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  produkItem: {
    width: "48%",
    marginBottom: 10,
  },
  produkImage: {
    width: "100%",
    height: 150,
  },
  produkDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  produkNama: {
    fontSize: 16,
    color: "#333",
  },
  produkHarga: {
    fontSize: 16,
    color: "#666",
  },
});
