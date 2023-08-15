import { Card, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import common from "../styles/common";
import { Fragment } from "react";

const calculateUnitProfit = (form, currBankroll) => {
  const initialBankroll = form.bankroll;
  const unitProfit = Math.round(
    (currBankroll - initialBankroll) / form.betUnit
  );
  return unitProfit;
};

const VerticalDivider = () => {
  return (
    <View style={common.column}>
      <View
        style={{
          flex: 1,
          borderLeftWidth: 0.5,
          borderColor: "#b9b4c2",
        }}
      ></View>
    </View>
  );
};

const InfoColumn = ({ label, value, color }) => {
  const textColor = color || "#E6E1E5"; // Use the provided color or default to black

  return (
    <View style={common.column}>
      <Text variant="bodyLarge">{label}</Text>
      <Text
        variant="headlineLarge"
        style={{ ...styles.centerText, color: textColor }}
      >
        {value}
      </Text>
    </View>
  );
};

const SessionData = ({ sessionData, params }) => {
  const unitProfit = calculateUnitProfit(params, sessionData.bankroll);
  return (
    <Card style={{ marginTop: 20 }}>
      <Card.Content>
        <View style={{ ...common.row, justifyContent: "space-around" }}>
          {[
            { label: "Round", value: sessionData.round },
            { label: "Next Bet", value: `£${sessionData.next_bet}` },
            { label: "Bankroll", value: `£${sessionData.bankroll}` },
            {
              label: "Unit Profit",
              value: unitProfit,
              color: unitProfit >= 0 ? "green" : "red",
            },
          ].map((item, index) => (
            <Fragment key={index}>
              <InfoColumn {...item} />
              {index < 3 && <VerticalDivider />}
            </Fragment>
          ))}
        </View>
        {sessionData.progression && (
          <View style={common.row}>
            <View style={common.column}>
              <Text variant="bodyLarge" style={{ marginTop: 15 }}>
                Progression
              </Text>
              <Text variant="headlineMedium" style={styles.centerText}>
                {sessionData.progression}
              </Text>
            </View>
          </View>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  centerText: {
    textAlign: "center",
  },
});

export default SessionData;
