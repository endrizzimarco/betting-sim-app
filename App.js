import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import SimulationForm from "./components/SimulationForm";
import SessionDisplay from "./components/SessionDisplay";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SessionDisplay />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
