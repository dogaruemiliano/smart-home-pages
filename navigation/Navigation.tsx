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
import { refreshToken, setAuthState } from "../store/slices/auth";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { hideAsync } from "expo-splash-screen";
import { WEBSOCKET_ENDPOINT } from "@constants/api";
import { setAcState } from "@store/slices/ac";

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
      <Drawer.Screen name="Air Conditioner" component={AcRemoteScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isReady, setIsReady] = useState(false);

  const ws = useRef(new WebSocket(WEBSOCKET_ENDPOINT)).current;

  const isLoggedIn = useSelector((state: RootState) =>
    isAuthenticated(state.auth)
  );
  const username = useSelector((state: RootState) => state.auth.username);

  useLayoutEffect(() => {
    const setup = async () => {
      const savedAuthData = await getAuthDataFromSecureAsync();
      // check if data from local storage is present
      if (savedAuthData && savedAuthData?.refreshToken) {
        console.log("saved data is present");
        // check if is still valid
        if (isAuthenticated(savedAuthData)) {
          // store it in state
          console.log("saved data is still valid");
          await dispatch(setAuthState(savedAuthData));
          // else use refresh token
        } else {
          console.log("saved data is not valid, using refresh token");
          await dispatch(refreshToken(savedAuthData));
        }
      }
      // store response data in state
      // hide splash screen

      setIsReady(true);
      hideAsync();
    };

    setup();
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      // connection opened
      console.log("connected");
      ws.send(
        '{"command":"subscribe","identifier": "{\\"channel\\":\\"AirConditionerChannel\\"}"}'
      );
    };

    ws.onmessage = (e) => {
      // a message was received
      const data = JSON.parse(e.data);
      console.log(data);
      if (
        data.message?.state &&
        data.message.user.toLowerCase() !== username.toLowerCase()
      ) {
        console.log("passed if check");
        dispatch(setAcState(data.message.state));
      }
    };

    ws.onerror = (e) => {
      // an error occurred
      // console.log(e);
    };

    ws.onclose = (e) => {
      // connection closed
      // console.log(e.code, e.reason);
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
