import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useParametersContext } from "../components/ParametersContext";
import { Button, Text } from "react-native-paper";
import TimerComponent from "../components/TimerComponent";
import ChanceDisplay from "../components/ChanceDisplay";
import SessionData from "../components/SessionData";
import common from "../styles/common";
import { useState, useEffect } from "react";
import axios from "axios";

const getGameType = (form) => {
  switch (form.game) {
    case "roulette":
      return form.rouletteType;
    case "baccarat":
      return form.baccaratType;
    case "blackjack":
      return form.blackjackType;
  }
};

const SessionDisplay = ({ sessionOver }) => {
  const [sessionInstance, setInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const { form } = useParametersContext();
  const [sessionData, setData] = useState({
    chance: 0,
    round: 1,
    next_bet: form.betUnit,
    bankroll: form.bankroll,
  });

  const tickSession = async (won) => {
    try {
      setLoading(true);
      const params = {
        won,
        type: "simulate",
        session_instance: sessionInstance,
        data: JSON.stringify({
          strategy: form.strategy,
          game: form.game + "_" + getGameType(form),
          bankroll: parseInt(form.bankroll),
          bet_unit: parseFloat(form.betUnit),
          profit_goal: parseInt(form.profitGoal),
        }),
      };
      const response = await (await axios.get(``, { params })).data;
      console.log(response);

      setInstance(response.state);
      setData(response.data);
      setLoading(false);
      if (response.data.chance == 0) {
        sessionOver("lose");
      } else if (response.data.chance == 100) {
        sessionOver("win");
      }
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  useEffect(() => {
    tickSession(0);
  }, []);

  return (
    <View style={[styles.root]}>
      <View style={styles.topRow}>
        {/* Chance */}
        <ChanceDisplay sessionData={sessionData} loading={loading} />

        {/* Metadata */}
        <View style={{ ...common.column, ...styles.metadata }}>
          <Text variant="labelMedium"> Session ID: XYZ</Text>
          <TimerComponent />
          <Text variant="labelSmall">{form.strategy}</Text>
          <Text variant="labelSmall">Initial Bankroll: £{form.bankroll}</Text>
          <Text variant="labelSmall">Bet Unit: £{form.betUnit}</Text>
          <Text variant="labelSmall">Profit Goal: £{form.profitGoal}</Text>
        </View>
      </View>

      {/* Session Data */}
      <SessionData
        params={form}
        sessionData={sessionData}
        sessionOver={sessionOver}
      />

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
  },
  topRow: {
    flexDirection: "row",
    marginTop: 40,
    marginRight: 5,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  metadata: {
    alignItems: "flex-end",
    marginBottom: 3,
  },
  buttonContent: {
    paddingVertical: 30,
    paddingHorizontal: 40,
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
