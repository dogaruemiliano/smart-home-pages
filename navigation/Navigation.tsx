import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../constants/styles";
import LoginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AcRemoteScreen from "../screens/AcRemoteScreen";
import { isAuthenticated } from "../services/auth/authApi";
import { getAuthDataFromSecureAsync } from "../services/auth/localAuth";
import { RootState } from "../store";
import { setState } from "../store/slices/auth";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.neutral,
        contentStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.neutral,
        contentStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name="AcRemote" component={AcRemoteScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  // check secure storage for token
  const dispatch = useDispatch();
  const getDataFromLocalStorage = async () => {
    const authData = await getAuthDataFromSecureAsync();
    // if token is present
    if (authData.token) {
      // - if token is valid then store it in state
      if (isAuthenticated(authData)) {
        setState(authData);
      } else {
        // - else call refresh token function
        console.log("Calling refresh function because token is expired");
      }
      // else don't do anything
    }
  };

  const isLoggedIn = useSelector((state: RootState) =>
    isAuthenticated(state.auth)
  );

  return (
    <NavigationContainer>
      {isLoggedIn || true ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
