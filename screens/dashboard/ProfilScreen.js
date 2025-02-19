import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice"; // pastikan path ini benar
import ButtonCustom from "../../components/Form/ButtonCustom";

const ProfilScreen = () => {
  const dispatch = useDispatch();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const updateProfil = () => {
    // todo: buatkan fungsi update profil disini
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profilContainer}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={styles.profilImage}
        />
        <Text style={styles.profilNama}>{nama}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.formInput}
          placeholder="Nama"
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.formInput}
          placeholder="No HP"
          value={noHp}
          onChangeText={(text) => setNoHp(text)}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Alamat"
          value={alamat}
          onChangeText={(text) => setAlamat(text)}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Password Lama"
          value={passwordLama}
          onChangeText={(text) => setPasswordLama(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.formInput}
          placeholder="Password Baru"
          value={passwordBaru}
          onChangeText={(text) => setPasswordBaru(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.formInput}
          placeholder="Konfirmasi Password"
          value={konfirmasiPassword}
          onChangeText={(text) => setKonfirmasiPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.formButton} onPress={updateProfil}>
          <Text style={styles.formButtonText}>Update</Text>
        </TouchableOpacity>

        <ButtonCustom
          title="Logout"
          onPress={() => dispatch(logout())}
          color="#007bff"
          size="md"
        />
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profilContainer: {
    alignItems: "center",
    padding: 20,
  },
  profilImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profilNama: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  formContainer: {
    padding: 20,
  },
  formInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  formButton: {
    backgroundColor: "#FF69B4",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  formButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
