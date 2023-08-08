import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import axios from "axios";

const callLambda = async () =>
  console.log(
    await axios.get(
      `https://6csjpnpengggz357h33znqhdhq0crbnp.lambda-url.eu-west-1.on.aws/ `
    )
  );

export default function App() {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.container}
      >
        <Text>Hello world!</Text>
        <Button onPress={callLambda} title="Click Me"></Button>
        <StatusBar style="auto" />
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
