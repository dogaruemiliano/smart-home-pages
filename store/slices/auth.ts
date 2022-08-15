import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import {
  AuthStateData,
  loginWithPassword,
  PasswordCredentials,
} from "../../services/auth/authApi";
import {
  getAuthDataFromSecureAsync,
  storeAuthDataToSecureAsync,
} from "../../services/auth/localAuth";

export const checkLoginData = createAsyncThunk(
  "auth/checkLoginData",
  async () => {
    try {
      const savedAuthData = await getAuthDataFromSecureAsync();
      return savedAuthData || initialState;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: PasswordCredentials) => {
    try {
      const authData = await loginWithPassword(credentials);
      await storeAuthDataToSecureAsync(authData);
      return authData;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  storeAuthDataToSecureAsync(initialState);
});

export const initialState: AuthStateData = {
  username: "",
  token: "",
  tokenType: "",
  refreshToken: "",
  createdAt: 0,
  expiresIn: 0,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setState(state, action: PayloadAction<AuthStateData>) {
      state = action.payload;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    // Check login data
    builder.addCase(checkLoginData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkLoginData.fulfilled, (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
      state.isLoading = false;
    });
    builder.addCase(checkLoginData.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });
    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
      storeAuthDataToSecureAsync(action.payload);
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false;
    });

    //Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.createdAt = initialState.createdAt;
      state.expiresIn = initialState.expiresIn;
      state.token = initialState.token;
      state.refreshToken = initialState.refreshToken;
      state.tokenType = initialState.tokenType;
    });
    builder.addCase(logout.rejected, (state, action) => {
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
    });
  },
});

// Action creators are generated for each case reducer function
export const { setState } = authSlice.actions;

export default authSlice.reducer;
