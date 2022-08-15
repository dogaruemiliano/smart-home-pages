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
import { AppDispatch, RootState } from "../store";
import { checkLoginData, setState } from "../store/slices/auth";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useLayoutEffect } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.neutral,
        headerShadowVisible: false,
        contentStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* <DrawerItemList /> */}
      <DrawerContent {...props} />
      <DrawerItem
        label="Logout"
        inactiveTintColor={Colors.danger}
        onPress={() => console.log("LOGOUT")}
      />
    </DrawerContentScrollView>
  );
};

const AuthenticatedDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerShadowVisible: false,
        headerTintColor: Colors.neutral,
        drawerContentStyle: { backgroundColor: Colors.secondary },
        sceneContainerStyle: { backgroundColor: Colors.primary },
        headerLeft: () => <DrawerToggleButton tintColor={Colors.secondary} />,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Air Conditioner" component={AcRemoteScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  // check secure storage for token
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector((state: RootState) =>
    isAuthenticated(state.auth)
  );

  const getDataFromLocalStorage = async () => {
    const authData = await getAuthDataFromSecureAsync();
    // if token is present
    console.log("authData in navigation", authData);
    if (authData && authData.token) {
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

  useLayoutEffect(() => {
    // getDataFromLocalStorage();
    dispatch(checkLoginData())
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
