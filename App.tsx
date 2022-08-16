import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { preventAutoHideAsync } from "expo-splash-screen";
import { Colors } from "./constants/styles";
import { store } from "./store";
import Navigation from "./navigation/Navigation";

// Prevent splash screen from 
preventAutoHideAsync();

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView style={styles.container}> */}
      <StatusBar style="light" />
      <Provider store={store}>
        <Navigation />
      </Provider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    color: Colors.neutral,
  },
});
