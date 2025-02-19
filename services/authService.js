import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  getWithoutToken,
  getWithToken,
  postWithToken,
  postWithoutToken,
} from "../utils/restAPI";

// Registrasi
const register = async (userData) => {
  try {
    const response = await postWithoutToken(`register`, userData);

    if (response) {
      await AsyncStorage.setItem("user", JSON.stringify(response));
    }

    return response;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat registrasi";
  }
};

// Login
const login = async (userData) => {
  try {
    const response = await postWithoutToken(`login`, userData);

    if (response) {
      await AsyncStorage.setItem("user", JSON.stringify(response));
    }

    return response;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat login";
  }
};

// Logout
const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
    const navigation = useNavigation();
    navigation.navigate("Login");
  } catch (error) {
    console.error("Gagal menghapus data user:", error);
  }
};

// Update Profil
const updateProfile = async (userData) => {
  try {
    const storedUser = await AsyncStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    if (!user || !user.token) {
      throw "Token tidak ditemukan, harap login ulang";
    }

    const response = await postWithToken(`users/${user.id}`, userData);

    if (response) {
      await AsyncStorage.setItem("user", JSON.stringify(response));
    }

    return response;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat update profil";
  }
};

// Mendapatkan profil user
const getProfile = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;

    if (!user || !user.token) {
      throw "Token tidak ditemukan, harap login ulang";
    }

    const response = await getWithToken(`profil`);

    return response;
  } catch (error) {
    throw error.response?.data || "Gagal mengambil profil";
  }
};

const authService = {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
};

export default authService;
