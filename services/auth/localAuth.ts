import * as SecureStore from "expo-secure-store";
import { AuthStateData } from "../../services/auth/authApi";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initialState as emptyState } from "@store/slices/auth";

export const getAuthDataFromSecureAsync = async () => {
  const storeMethod =
    Platform.OS === "web" ? AsyncStorage.getItem : SecureStore.getItemAsync;

  try {
    const storedValue = await storeMethod("authData");
    console.log(storedValue);
    if (storedValue !== null) {
      const AuthData = JSON.parse(storedValue);
      return AuthData as AuthStateData;
    }
  } catch (err: any) {
    console.log(err);
  }

  return null;
};

export const storeAuthDataToSecureAsync = async (
  authData: AuthStateData | null
) => {
  const storeMethod =
    Platform.OS === "web" ? AsyncStorage.setItem : SecureStore.setItemAsync;

  const stringValue = JSON.stringify(authData);
  try {
    await storeMethod("authData", stringValue);
  } catch (err: any) {
    return false;
  }
  return true;
};
