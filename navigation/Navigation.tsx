import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticated } from "../services/auth/authApi";
import { getAuthDataFromSecureAsync } from "../services/auth/localAuth";
import { AppDispatch, RootState } from "../store";
import { refreshToken, setAuthState } from "../store/slices/auth";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { hideAsync } from "expo-splash-screen";
import { WEBSOCKET_ENDPOINT } from "@constants/api";
import { fetchAcState, setAcState } from "@store/slices/ac";
import AuthStack from "./AuthStack";
import AuthenticatedDrawer from "./AuthenticatedDrawer";

const Navigation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isReady, setIsReady] = useState(false);

  const ws = useRef(new WebSocket(WEBSOCKET_ENDPOINT)).current;

  const username = useSelector((state: RootState) => state.auth.username);
  const isLoggedIn = useSelector((state: RootState) =>
    isAuthenticated(state.auth)
  );

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
      await dispatch(fetchAcState());
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
      if (data.message?.state && data.message.user !== username) {
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
  }, [username]);

  if (!isReady) {
    return null;
  }

  console.log("RENDER Navigation");

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthenticatedDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
