import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Fungsi untuk mendapatkan user dari AsyncStorage
const getUserFromStorage = async () => {
  try {
    const userData = await AsyncStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error("Gagal mendapatkan user dari AsyncStorage:", error);
    return null;
  }
};

// Async Thunk untuk memuat user dari storage saat aplikasi dimulai
export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  return await getUserFromStorage();
});

const initialState = {
  user: null, // Akan diperbarui oleh `loadUser`
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Async Thunk untuk login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login gagal"
      );
    }
  }
);

// Async Thunk untuk logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

// Async Thunk untuk mendapatkan profil
export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      return await authService.getProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Gagal mengambil profil"
      );
    }
  }
);

// Slice Redux
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
