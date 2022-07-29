import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import {
  AuthStateData,
  loginWithPassword,
  signupWithPassword,
  PasswordCredentials,
} from "../../services/auth/authApi";
import { storeAuthDataToSecureAsync } from "../../services/auth/localAuth";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: PasswordCredentials) => {
    try {
      return await loginWithPassword(credentials);
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials: PasswordCredentials) => {
    try {
      const response = await signupWithPassword(credentials);
      return response
      // return await signupWithPassword(credentials);
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (thunkApi) => {
  console.log("Nada logout");
});

const initialState: AuthStateData = {
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
      for(const key in Object.keys(state)) {
        // state[key] = action.payload[key]
      }
    }
  },
  extraReducers: (builder) => {
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
      storeAuthDataToSecureAsync(action.payload)
      state.isLoading = false
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
      state.isLoading = false
    });

    // Signup
    builder.addCase(signup.fulfilled, (state, action) => {
      state.createdAt = action.payload.createdAt;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenType = action.payload.tokenType;

    });
    builder.addCase(signup.rejected, (state, action) => {
      console.log(action);
      Alert.alert("There was an error", action.error.message, [
        { text: "Close", style: "cancel" },
      ]);
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
