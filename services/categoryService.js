import { getWithoutToken } from "./api";

export const getCategory = async () => {
  try {
    const response = await getWithoutToken("category");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Gagal mengambil data kategori";
  }
};
