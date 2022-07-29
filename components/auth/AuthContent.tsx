import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import FlatButton from "../UI/FlatButton";
import AuthForm, { AuthData } from "./AuthForm";
import { Colors } from "../../constants/styles";
import { PasswordCredentials } from "../../services/auth/authApi";

type AuthContentProps = {
  isLogin?: boolean;
  onAuthenticate: (authData: PasswordCredentials) => void;
};

const AuthContent: React.FC<AuthContentProps> = (props) => {
  const { isLogin, onAuthenticate } = props;
  const { navigate } = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    username: false,
    password: false,
  });

  // const handleAuthModeSwitch = () => {
  //   navigate(isLogin ? "Signup" : "Login");
  // };

  const handleSubmit = (credentials: AuthData) => {
    let { username, password } = credentials;

    username = username.trim();
    password = password.trim();

    const usernameIsValid = username.length >= 3;
    const passwordIsValid = password.length > 6;

    if (!usernameIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        username: !usernameIsValid,
        password: !passwordIsValid,
      });
      return;
    }
    onAuthenticate({ username, password });
  };

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={handleSubmit}
        credentialsInvalid={credentialsInvalid}
      />
      {/* <View style={styles.buttons}>
        <FlatButton onPress={handleAuthModeSwitch}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </FlatButton>
      </View> */}
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});
