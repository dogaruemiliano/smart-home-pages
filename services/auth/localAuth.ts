import * as SecureStore from "expo-secure-store";
import { AuthStateData } from "../../services/auth/authApi";

export const getAuthDataFromSecureAsync = async () => {
  return {
    username: (await SecureStore.getItemAsync("username")) || "",
    token: (await SecureStore.getItemAsync("token")) || "",
    tokenType: (await SecureStore.getItemAsync("tokenType")) || "",
    refreshToken: (await SecureStore.getItemAsync("refreshToken")) || "",
    createdAt: parseInt((await SecureStore.getItemAsync("createdAt")) || ""),
    expiresIn: parseInt((await SecureStore.getItemAsync("expiresIn")) || ""),
    isLoading: !!((await SecureStore.getItemAsync("isLoading")) || ""),
  } as AuthStateData;
};

export const storeAuthDataToSecureAsync = async (authData: AuthStateData) => {
  try {
    for (const [key, value] of Object.entries(authData)) {
      const result = await SecureStore.setItemAsync(key, value.toString());
    }
  } catch (err: any) {
    return false;
  }
  return true;
};
