import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store";

import Button from "../UI/Button";
import Input from "./Input";

export type AuthData = {
  username: string;
  password: string;
};

type AuthDataValidity = {
  username: boolean;
  password: boolean;
};

type AuthFormProps = React.FC<{
  isLogin?: boolean;
  onSubmit: (props: AuthData) => void;
  credentialsInvalid: AuthDataValidity;
}>;

const AuthForm: AuthFormProps = ({ isLogin, onSubmit, credentialsInvalid }) => {
  const [credentials, setCredentials] = useState({
    username: process.env.NODE_ENV === 'development' ? "Emi" : "",
    password: process.env.NODE_ENV === 'development' ? "admin123@" : "",
  });

  const isLoading = useSelector((state: RootState) => state.auth.isLoading)

  const { username: usernameIsInvalid, password: passwordIsInvalid } =
    credentialsInvalid;

  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    console.log("updateInputValueHandler", enteredValue)
    setCredentials((credentials) => ({
      ...credentials,
      [inputType]: enteredValue,
    }));
  };

  const submitHandler = async () => {
    try {
      onSubmit({
        username: credentials.username.toLowerCase(),
        password: credentials.password,
      }); 
    } catch (err: any) {
      console.log(err)
      throw new Error(err)
    }
  };

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Username"
          onUpdateValue={(value) => updateInputValueHandler("username", value)}
          value={credentials.username}
          isInvalid={usernameIsInvalid}
        />
        <Input
          label="Password"
          onUpdateValue={(value) => updateInputValueHandler("password", value)}
          secure
          value={credentials.password}
          isInvalid={passwordIsInvalid}
        />
        <View style={styles.buttons}>
          <Button onPress={submitHandler} isLoading={isLoading}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  form: {},
  buttons: {
    marginTop: 12,
  },
});
