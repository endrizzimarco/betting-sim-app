import { Text, Divider, SegmentedButtons } from "react-native-paper";
import { View } from "react-native";
import styles from "../styles/common";
import { useParametersContext } from "./ParametersContext";

const getCasinoEdge = (form) => {
  switch (form.game) {
    case "roulette":
      if (form.rouletteType == "european") return (2.7).toFixed(2);
      else return 5.26;
    case "baccarat":
      if (form.baccaratType == "player") return 1.24;
      else return 1.06;
    case "blackjack":
      if (form.blackjackType == "no_strategy") return (2).toFixed(2);
      else return (0.5).toFixed(2);
  }
};

const gameOptions = (form) => {
  switch (form.game) {
    case "roulette":
      return (
        <SegmentedButtons
          value={form.rouletteType}
          density="medium"
          onValueChange={form.setRouletteType}
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
          value={form.baccaratType}
          density="medium"
          onValueChange={form.setBaccaratType}
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
          value={form.blackjackType}
          density="medium"
          onValueChange={form.setBlackjackType}
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
};

const GameInput = () => {
  const { form } = useParametersContext();

  return (
    <View>
      <Text variant="bodyLarge" style={styles.subtitle}>
        Game
      </Text>
      <Divider bold style={styles.divider} />
      <Text style={{ marginBottom: 10 }}>
        House edge: {getCasinoEdge(form)}%
      </Text>
      <SegmentedButtons
        value={form.game}
        onValueChange={form.setGame}
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
      {gameOptions(form)}
    </View>
  );
};

export default GameInput;
