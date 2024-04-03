import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </Provider>
    </SafeAreaProvider>
  );
}
