import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useParametersContext } from "./ParametersContext";
import responsiveSize from "../utils/calculateWidth.js";
import { Button, Text, Card } from "react-native-paper";
import common from "../styles/common";
import { useState } from "react";
import axios from "axios";

const getChanceColor = (percentage) => {
  // Ensure the percentage is between 0 and 100
  const normalizedPercentage = Math.min(100, Math.max(0, percentage));
  // Calculate the red and green components based on the percentage
  const red = Math.round(255 - normalizedPercentage * 2.55); // Brighter red
  const green = Math.round(normalizedPercentage * 2.55); // Brighter green
  // Return the RGB color as a ColorPropType
  return `rgb(${red}, ${green}, 0)`; // This is a string representation of the RGB color
};

const calculateUnitProfit = (form, currBankroll) => {
  console.log(form);
  const initialBankroll = form.bankroll;
  const unitProfit = Math.round(
    (currBankroll - initialBankroll) / form.betUnit
  );
  return unitProfit;
};

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
  const unitProfit = calculateUnitProfit(form, sessionData.bankroll);

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
  const chance = sessionData.chance.toFixed(2);

  return (
    <View style={[styles.root, { width: responsiveSize(screenWidth) }]}>
      <View style={styles.topRow}>
        <View style={common.column}>
          <Text variant="headlineSmall" style={styles.outlinedText}>
            Current chance
          </Text>
          <Text
            variant="displayLarge"
            style={{ ...styles.outlinedText, color: getChanceColor(chance) }}
          >
            {loading ? (
              <View
                style={{ ...common.row, alignItems: "center", marginLeft: 3 }}
              >
                <ImageBackground
                  style={styles.spinner}
                  source={require("../assets/spin.gif")}
                />
                <Text style={{ marginLeft: 5 }}> Simulating....</Text>
              </View>
            ) : (
              chance + "%"
            )}
          </Text>
        </View>

        <View style={{ ...common.column, ...styles.metadata }}>
          <Text>Session ID: XYZ</Text>
          <Text>Duration: 2m</Text>
          <Text>Initial Bankroll: £{form.bankroll}</Text>
          <Text>Bet Unit: £{form.betUnit}</Text>
          <Text>Profit Goal: £{form.profitGoal}</Text>
        </View>
      </View>

      <Card style={{ marginTop: 20 }}>
        <Card.Content style={{ ...common.row, justifyContent: "space-around" }}>
          <View style={common.column}>
            <Text variant="bodyLarge">Round</Text>
            <Text variant="headlineLarge" style={styles.centerText}>
              {sessionData.round}
            </Text>
          </View>
          <View style={common.column}>
            <Text variant="bodyLarge">Bankroll</Text>
            <Text variant="headlineLarge" style={styles.centerText}>
              £{sessionData.bankroll}
            </Text>
          </View>
          <View style={common.column}>
            <Text variant="bodyLarge">Unit Profit</Text>
            <Text
              variant="headlineLarge"
              style={[
                styles.centerText,
                { color: unitProfit >= 0 ? "green" : "red" },
              ]}
            >
              {unitProfit}
            </Text>
          </View>
          <View style={common.column}>
            <Text variant="bodyLarge">Next Bet</Text>
            <Text variant="headlineLarge" style={styles.centerText}>
              £{sessionData.next_bet}
            </Text>
          </View>
        </Card.Content>
      </Card>
      {sessionData.progression && (
        <Card style={{ marginVertical: 20 }}>
          <Card.Content>
            <Text variant="bodyLarge">Progression</Text>
            <Text variant="headlineMedium">{sessionData.progression}</Text>
          </Card.Content>
        </Card>
      )}

      <View style={{ ...common.row, marginTop: 20 }}>
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
  centerText: {
    textAlign: "center",
  },
  topRow: {
    flexDirection: "row",
    marginTop: 40,
    marginRight: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  spinner: {
    width: 70,
    height: 70,
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
  textContainer: {
    position: "relative", // Position relative to create a container
  },
  outlinedText: {
    fontWeight: "bold", // Use a bold font weight
    color: "white", // Text color (inside)
    textShadowColor: "black", // Shadow color (outside)
    textShadowOffset: { width: -1, height: 1 }, // Offset to create outline effect
    textShadowRadius: 0.5, // Radius to control the thickness of the border
  },
});

export default SessionDisplay;
