import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { preventAutoHideAsync } from "expo-splash-screen";
import { Colors } from "./constants/styles";
import { store } from "./store";
import Navigation from "./navigation/Navigation";
import SimpleButtonOnOff from "./screens/SimpleButtonOnOff";
import { useEffect, useRef } from "react";
import { WEBSOCKET_ENDPOINT } from "@constants/api";

// const ws = useRef(new WebSocket(WEBSOCKET_ENDPOINT, ["arduino"])).current;
const ws = useRef(new WebSocket(WEBSOCKET_ENDPOINT, ["arduino"])).current;

useEffect(() => {
  ws.onopen = () => {
    console.log("connected");
    ws.send(
      '{"command":"subscribe","identifier": "{\\"channel\\":\\"AirConditionerChannel\\"}"}'
    );
  };

  ws.onmessage = (e) => {
    console.log(e);
  };

  ws.onerror = (e) => {
    console.log(e);
  };

  ws.onclose = (e) => {
    console.log(e.code, e.reason);
  };
}, []);

const togglePower = () => {
  ws.send(
    '{"command":"subscribe","identifier": "{"channel":"BoardChannel"}", "data": "{ "action": "toggle_power"}"}'
  );
};

// // Prevent splash screen from
// preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      {/* <Provider store={store}>
        <Navigation />
      </Provider> */}
      <SimpleButtonOnOff onClick={togglePower} />
    </SafeAreaProvider>
  );
}
