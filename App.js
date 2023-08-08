import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import SimulationForm from "./components/SimulationForm";

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.container}
      >
        <SimulationForm />
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
