import { useState } from "react";
import { Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import axios from "axios";

const params = {
  type: "simulate",
  session_instance: null,
  won: false,
  data: {
    strategy: "optimal_guetting",
    bankroll: 50,
    bet_unit: 5,
    profit_goal: 100,
  },
};

const session = {
  round: 0,
  bet: 2.5,
  bankroll: 100,
};

const SessionDisplay = () => {
  const [sessionInstance, setInstance] = useState(null);
  const [sessionData, setData] = useState(session);

  const startSession = async () => {
    try {
      const response = await axios.get(
        `https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/`,
        params
      );
      // Assuming the response contains the chance value
      setInstance(response.data.state);
      console.log(response);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  const continueSession = async () => {
    try {
      const response = await axios.get(
        `https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/`,
        { type: "simulate", session_instance: sessionInstance }
      );
      // Assuming the response contains the chance value
      setInstance(response.data.state);
      setData(response.data.data);
      console.log(response);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View style={styles.container}>
        <Text h1 h1Style={styles.h1Style}>
          Heading 1
        </Text>
        <Text h4 style={styles.text}>
          Current Bankroll: {sessionData.round}
        </Text>
        <Text h4 style={styles.text}>
          Round: {sessionData.round}
        </Text>
        <Text h4 style={styles.text}>
          Next Bet: {sessionData.round}
        </Text>

        <Button size="xl" color="green">
          WON
        </Button>
        <Button buttonStyle={styles.button} size="xl" color="red">
          LOST
        </Button>
        <Button
          onPress={startSession}
          buttonStyle={styles.button}
          size="xl"
          color="grey"
        >
          START SESSION
        </Button>
      </View>
      {/* <ImageBackground
        source={require("../assets/cheerleader-pom-poms.gif")}
        imageStyle={{ resizeMode: "repeat" }}
        style={{ flex: 1, width: "100%", height: "100%" }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    marginTop: 300,
  },
  button: {
    marginTop: 20,
  },
  h1Style: {
    fontWeight: "300",
    color: "#fff",
  },
  text: {
    color: "white",
  },
  gif: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SessionDisplay;
