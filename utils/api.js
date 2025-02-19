import axios from "axios";

export const getWithToken = async (url) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getWithoutToken = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const postWithToken = async (url, data) => {
  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const postWithoutToken = async (url, data) => {
  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
