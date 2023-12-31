import { ParametersProvider } from "./components/ParametersContext";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { StyleSheet, View, ImageBackground } from "react-native";
import BottomNavigation from "./views/BottomNavigation";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

// Allow for background image to be shown
const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  axios.defaults.baseURL =
    "https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/";

  return (
    <PaperProvider theme={theme}>
      <ParametersProvider>
        <StatusBar style="light" translucent />
        <ImageBackground
          source={require("./assets/bg.jpg")}
          style={styles.container}
        >
          <View style={styles.overlay}>
            <BottomNavigation />
          </View>
        </ImageBackground>
      </ParametersProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // opacity
  },
});
