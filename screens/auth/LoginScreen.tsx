import React from "react";
import { useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AuthContent from "@components/auth/AuthContent";
import { AppDispatch } from "@store";
import { login } from "@store/slices/auth";
import { RootStackParamList } from "../types";
import { PasswordCredentials } from "@services/Auth/authApi";


type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleLogin = async (credentials: PasswordCredentials) => {
    try {
      dispatch(login(credentials))
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <AuthContent
      isLogin
      onAuthenticate={handleLogin}
    />
  );
};

export default LoginScreen;
