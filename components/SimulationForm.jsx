import { Dimensions, StyleSheet, View } from "react-native";
import { useState, useRef } from "react";
import axios from "axios";
import {
  Button,
  Text,
  TextInput,
  Card,
  Switch,
  Divider,
} from "react-native-paper";

const responsiveSize = (screenWidth) => {
  if (screenWidth < 500) return "100%";
  else if (screenWidth < 1000) return "50%";
  else if (screenWidth < 1500) return "33%";
  else return "25%";
};

const SimulationForm = () => {
  const [bankroll, setBankroll] = useState("");
  const [betUnit, setBetUnit] = useState("");
  const [profitGoal, setProfitGoal] = useState("");
  const [american, setAmerican] = useState(false);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const getStrategies = async () => {
    try {
      const response = await axios.get(
        `https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/`,
        { params: { type: "get_strategies" } }
      );
      console.log(response);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <Card
      elevation={2}
      style={[styles.card, { width: responsiveSize(screenWidth) }]}
    >
      <Card.Title title="Define session" titleVariant="headlineSmall" />
      <Card.Content>
        <Divider style={styles.divider} />
        <View style={styles.inline}>
          <View style={styles.column}>
            <Text>Bankroll</Text>
            <TextInput
              dense
              mode="outlined"
              value={bankroll}
              onChangeText={(bankroll) => setBankroll(bankroll)}
              keyboardType="numeric"
              placeholder="500"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                inputRef2.current.focus(); // Focus the second input
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.column}>
            <Text>Bet Unit</Text>
            <TextInput
              dense
              mode="outlined"
              value={betUnit}
              onChangeText={(betUnit) => setBetUnit(betUnit)}
              keyboardType="numeric"
              placeholder="50"
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => {
                inputRef3.current.focus(); // Focus the third input
              }}
              ref={inputRef2}
              style={styles.input}
            />
          </View>
          <View style={styles.column}>
            <Text>Profit Goal</Text>
            <TextInput
              dense
              mode="outlined"
              value={profitGoal}
              onChangeText={(profitGoal) => setProfitGoal(profitGoal)}
              keyboardType="numeric"
              placeholder="1000"
              ref={inputRef3}
              style={styles.input}
            />
          </View>
        </View>

        <Divider style={styles.divider} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Text>American Roulette</Text>
          <Switch
            value={american}
            onValueChange={() => {
              setAmerican(!american);
            }}
          />
        </View>
      </Card.Content>
      <Card.Actions>
        <Button>RESET</Button>
        <Button>START SESSION</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
  },
  divider: {
    marginBottom: 10,
  },
  input: {
    marginTop: -2,
    flexGrow: 1,
  },
  inline: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
});

export default SimulationForm;
