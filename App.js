import { StatusBar } from "expo-status-bar";
import BottomNavigation from "./components/BottomNavigation";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <StatusBar style="light" translucent />
      <BottomNavigation />
    </PaperProvider>
  );
}
