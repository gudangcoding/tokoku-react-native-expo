import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.12/tokoku/public/api/";

const getWithToken = async (url) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(API_URL + url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getWithoutToken = async (url) => {
  const response = await axios.get(API_URL + url);
  return response.data;
};

const postWithToken = async (url, data) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(API_URL + url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const postWithoutToken = async (url, data) => {
  const response = await axios.post(API_URL + url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export { getWithoutToken, getWithToken, postWithToken, postWithoutToken };
