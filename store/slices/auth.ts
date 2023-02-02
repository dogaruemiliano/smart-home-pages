import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { RootState } from "..";
import {
  AuthStateData,
  loginWithPassword,
  loginWithRefreshToken,
  PasswordCredentials,
  RefreshTokenCredentials,
} from "../../services/auth/authApi";
import {
  storeAuthDataToSecureAsync,
} from "../../services/auth/localAuth";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: PasswordCredentials) => {
    try {
      const authData = await loginWithPassword(credentials);
      storeAuthDataToSecureAsync(authData);

      return authData;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const refreshToken = createAsyncThunk<
  AuthStateData,
  RefreshTokenCredentials | undefined,
  { state: RootState }
>(
  "auth/refreshToken",
  async (credentials: RefreshTokenCredentials | undefined, thunkApi) => {
    try {
      const credentialsFromState = thunkApi.getState().auth;
      const authData = await loginWithRefreshToken(
        credentials || credentialsFromState
      );
      console.log("AuthData", authData);
      storeAuthDataToSecureAsync(authData);

      return authData;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  storeAuthDataToSecureAsync(null);
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
    setAuthState(state, action: PayloadAction<AuthStateData>) {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.tokenType = action.payload.tokenType;
      state.refreshToken = action.payload.refreshToken;
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      if (process.env.NODE_ENV === "development") {
        Alert.alert(
          "There was an error in AUTH reducer",
          action.error.message,
          [{ text: "Close", style: "cancel" }]
        );
      }
      state.isLoading = false;
    });

    // refreshToken
    builder.addCase(refreshToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.username = action.payload.username;
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;
      state.isLoading = false;
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      if (process.env.NODE_ENV === "development") {
        Alert.alert(
          "There was an error in AUTH reducer",
          action.error.message,
          [{ text: "Close", style: "cancel" }]
        );
      }
      state.isLoading = false;
    });

    //Logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.username = initialState.username;
      state.createdAt = initialState.createdAt;
      state.expiresIn = initialState.expiresIn;
      state.token = initialState.token;
      state.refreshToken = initialState.refreshToken;
      state.tokenType = initialState.tokenType;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      if (process.env.NODE_ENV === "development") {
        Alert.alert(
          "There was an error in AUTH reducer",
          action.error.message,
          [{ text: "Close", style: "cancel" }]
        );
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
