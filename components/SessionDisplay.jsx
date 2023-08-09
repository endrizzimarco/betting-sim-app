import { useState } from "react";
import { Button } from "@rneui/themed";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import axios from "axios";

const test_params = {
  type: "simulate",
  session_instance: null,
  won: 0,
  data: {
    strategy: "always_red",
    bankroll: 50,
    bet_unit: 5,
    profit_goal: 100,
  },
};

const session = {
  chance: 0,
  round: 1,
  next_bet: 5,
  bankroll: 50,
};

const SessionDisplay = () => {
  const [sessionInstance, setInstance] = useState(null);
  const [sessionData, setData] = useState(session);

  const tickSession = async (won) => {
    try {
      const params = {
        ...test_params,
        won,
        session_instance: sessionInstance,
        data: JSON.stringify(test_params.data),
      };
      const response = await axios.get(
        `https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/`,
        { params }
      );
      // Assuming the response contains the chance value
      console.log(response);
      setInstance(response.data.state);
      setData(response.data.data);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  return (
    <View style={{ width: "100%", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textshadow}>
          Current Chance: {sessionData.chance.toFixed(2)}%
        </Text>

        <Text style={styles.textshadow}>
          Current Bankroll: {sessionData.bankroll}
        </Text>
        <Text style={styles.textshadow}>Round: {sessionData.round}</Text>
        <Text style={styles.textshadow}>Next Bet: {sessionData.next_bet}</Text>

        <Button onPress={() => tickSession(1)} size="xl" color="green">
          WON
        </Button>
        <Button
          onPress={() => tickSession(0)}
          buttonStyle={styles.button}
          size="xl"
          color="red"
        >
          LOST
        </Button>
      </View>
      <ImageBackground
        source={require("../assets/cat-jump.gif")}
        imageStyle={{ flex: 1 }}
        resizeMode="repeat"
        style={{ flex: 1, width: undefined, height: undefined }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
  h1Style: {
    fontWeight: 300,
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
  textshadow: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Roboto",
    marginLeft: 5,
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
});

export default SessionDisplay;
