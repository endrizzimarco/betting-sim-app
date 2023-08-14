import { Dimensions, StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Text,
  TextInput,
  Card,
  Divider,
  SegmentedButtons,
  HelperText,
} from "react-native-paper";

function createLabelValueObjectArray(inputArray) {
  const result = inputArray.map((value) => {
    const label = value
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { label, value };
  });
  return result;
}

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
  const [rouletteType, setRouletteType] = useState("european");
  const [baccaratType, setBaccaratType] = useState("player");
  const [blackjackType, setBlackjackType] = useState("no_strategy");
  const [game, setGame] = useState("roulette");
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const [strategy, setStrategy] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [strategyList, setStrategyList] = useState([
    {
      label: "Loading...",
      value: null,
    },
  ]);
  const [strategyEmpty, setStrategyEmpty] = useState(false);

  const getStrategies = async () => {
    try {
      const response = await axios.get(
        `https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/`,
        { params: { type: "get_strategies" } }
      );
      console.log(response);
      setStrategyList(createLabelValueObjectArray(response.data));
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  function gameOptions(game) {
    console.log(game);
    switch (game) {
      case "roulette":
        console.log("hello");
        return (
          <SegmentedButtons
            value={rouletteType}
            density="medium"
            onValueChange={setRouletteType}
            buttons={[
              {
                value: "european",
                label: "European",
              },
              {
                value: "american",
                label: "American",
              },
            ]}
          />
        );
      case "baccarat":
        return (
          <SegmentedButtons
            value={baccaratType}
            density="medium"
            onValueChange={setBaccaratType}
            buttons={[
              {
                value: "player",
                label: "Player",
              },
              {
                value: "banker",
                label: "Banker",
              },
            ]}
          />
        );
      case "blackjack":
        return (
          <SegmentedButtons
            value={blackjackType}
            density="medium"
            onValueChange={setBlackjackType}
            buttons={[
              {
                value: "no_strategy",
                label: "Inexperienced",
              },
              {
                value: "strategy",
                label: "Strategy",
              },
            ]}
          />
        );
    }
  }

  useEffect(() => {
    getStrategies();
  }, []); // Empty dependency array ensures the effect runs only once
  const screenWidth = Dimensions.get("window").width;

  const validateForm = () => {
    setStrategyEmpty(false);
    if (strategy == "") {
      setStrategyEmpty(true);
    } else if (bankroll == "") {
      console.log("bankroll is empty");
    } else if (betUnit == "") {
      console.log("betUnit is empty");
    } else if (profitGoal == "") {
      console.log("profitGoal is empty");
    }
  };

  const getCasinoEdge = () => {
    switch (game) {
      case "roulette":
        if (rouletteType == "european") return (2.7).toFixed(2);
        else return 5.26;
      case "baccarat":
        if (baccaratType == "player") return 1.24;
        else return 1.06;
      case "blackjack":
        if (blackjackType == "no_strategy") return (2).toFixed(2);
        else return 0.5;
    }
  };

  return (
    <Card
      elevation={2}
      style={[styles.card, { width: responsiveSize(screenWidth) }]}
    >
      <Card.Content>
        <Text variant="bodyLarge"> Betting Strategy </Text>
        <Divider bold style={styles.divider} />
        <DropDown
          placeholder="Select a strategy"
          mode="outlined"
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={strategy}
          setValue={setStrategy}
          list={strategyList}
          dropDownItemTextStyle={{ color: "#E4DFE3" }}
          dropDownItemStyle={{
            borderColor: "#E4DFE3",
            borderWidth: 0.15,
            borderRadius: 2,
          }}
          dropDownItemSelectedStyle={{
            borderColor: "#D0BCFF",
            borderWidth: 0.4,
            borderRadius: 2,
          }}
        />
        {/* <HelperText type="error" visible={strategyEmpty}>
          Select a strategy!
        </HelperText> */}

        <Text variant="bodyLarge" style={styles.subtitle}>
          Session parameters
        </Text>
        <Divider bold style={styles.divider} />
        <View style={styles.inline}>
          <View style={styles.column}>
            <Text>Bankroll</Text>
            <TextInput
              dense
              mode="outlined"
              value={bankroll}
              onChangeText={(bankroll) => setBankroll(bankroll)}
              keyboardType="numeric"
              placeholder="0"
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
              placeholder="0"
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
              placeholder="0"
              ref={inputRef3}
              style={styles.input}
            />
          </View>
        </View>

        <Text variant="bodyLarge" style={styles.subtitle}>
          Game
        </Text>
        <Divider bold style={styles.divider} />
        <Text style={{ marginBottom: 10 }}>House edge: {getCasinoEdge()}%</Text>
        <SegmentedButtons
          value={game}
          onValueChange={setGame}
          style={{ marginBottom: 10 }}
          buttons={[
            {
              value: "roulette",
              label: "Roulette",
            },
            {
              value: "baccarat",
              label: "Baccarat",
            },
            {
              value: "blackjack",
              label: "Blackjack",
            },
          ]}
        />
        {gameOptions(game)}
      </Card.Content>
      <Divider bold style={styles.divider} />
      <Card.Actions>
        <Button>RESET</Button>
        <Button onPress={validateForm}>START SESSION</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
  },
  divider: {
    marginTop: 7,
    marginBottom: 15,
  },
  input: {
    marginTop: -2,
    maxWidth: 100,
  },
  inline: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  subtitle: {
    paddingTop: 20,
  },
});

export default SimulationForm;
