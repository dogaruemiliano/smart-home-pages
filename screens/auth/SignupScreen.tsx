// import React from "react";
// import { useDispatch } from "react-redux";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// import AuthContent from "@components/Auth/AuthContent";
// import { signup } from "@store/slices/auth";
// import { AppDispatch } from "@store";
// import { PasswordCredentials } from "@services/auth/authApi";
// import { RootStackParamList } from "./types";

// type Props = NativeStackScreenProps<RootStackParamList, "Signup">;

// const SignupScreen: React.FC<Props> = (props) => {
//   const dispatch = useDispatch<AppDispatch>();

//   const handleSignup = async (credentials: PasswordCredentials) => {
//     try {
//       dispatch(signup(credentials));
//     } catch (err: any) {
//       console.log(err);
//     }
//   };

//   return (
//     <AuthContent
//       onAuthenticate={handleSignup}
//     />
//   );
// };

// export default SignupScreen;
