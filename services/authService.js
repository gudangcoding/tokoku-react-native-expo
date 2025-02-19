import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.12/tokoku/public/api/";

// Registrasi
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}register`, userData);

    if (response.data) {
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat registrasi";
  }
};

// Login
const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}login`, userData);
    console.log("Login response:", response.data);
    if (response.data) {
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || "Terjadi kesalahan saat login";
  }
};

// Logout
const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.error("Gagal menghapus data user:", error);
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

    const response = await axios.get(`${API_URL}profil`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || "Gagal mengambil profil";
  }
};

const authService = {
  register,
  login,
  logout,
  getProfile,
};

export default authService;
