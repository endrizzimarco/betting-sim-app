import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useParametersContext } from "../components/ParametersContext";
import responsiveSize from "../utils/calculateWidth.js";
import { Button, Text } from "react-native-paper";
import TimerComponent from "../components/TimerComponent";
import ChanceDisplay from "../components/ChanceDisplay";
import SessionData from "../components/SessionData";
import common from "../styles/common";
import { useState } from "react";
import axios from "axios";

// TODO: remove
const test_params = {
  type: "simulate",
  session_instance: null,
  won: 0,
  data: {
    strategy: "labouchere",
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
  const [loading, setLoading] = useState(false);
  const { form } = useParametersContext();

  const tickSession = async (won) => {
    try {
      setLoading(true);
      const params = {
        ...test_params,
        won,
        session_instance: sessionInstance,
        data: JSON.stringify(test_params.data),
      };
      const response = await axios.get(``, { params });
      console.log(response);
      setInstance(response.data.state);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={[styles.root, { width: responsiveSize(screenWidth) }]}>
      <View style={styles.topRow}>
        {/* Chance */}
        <ChanceDisplay sessionData={sessionData} loading={loading} />

        {/* Metadata */}
        <View style={{ ...common.column, ...styles.metadata }}>
          <Text>Session ID: XYZ</Text>
          <TimerComponent />
          <Text>Initial Bankroll: £{form.bankroll}</Text>
          <Text>Bet Unit: £{form.betUnit}</Text>
          <Text>Profit Goal: £{form.profitGoal}</Text>
        </View>
      </View>

      {/* Session Data */}
      <SessionData params={form} sessionData={sessionData} />

      {/* Win/Lose buttons */}
      <View style={{ ...common.row, marginTop: 30 }}>
        <Button
          onPress={() => tickSession(1)}
          disabled={loading}
          mode="elevated"
          style={styles.greenBorder}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          buttonColor="#81C784"
          textColor="#006400"
        >
          WON
        </Button>
        <Button
          onPress={() => tickSession(0)}
          disabled={loading}
          mode="elevated"
          style={styles.redBorder}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          buttonColor="#EF5350"
          textColor="#8B0000"
        >
          LOST
        </Button>
      </View>

      {/* Pom pom girl */}
      <ImageBackground
        source={require("../assets/cheerleader-pom-poms.gif")}
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
  },
  topRow: {
    flexDirection: "row",
    marginTop: 40,
    marginRight: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  metadata: {
    alignItems: "flex-end",
  },
  buttonContent: {
    paddingVertical: 30,
    paddingHorizontal: 45,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  greenBorder: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "#006400",
  },
  redBorder: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: "#8B0000",
  },
  gif: {
    flex: 1,
    resizeMode: "contain",
    width: undefined,
    height: undefined,
  },
});

export default SessionDisplay;