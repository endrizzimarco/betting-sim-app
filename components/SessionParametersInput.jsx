import { Text, Divider, TextInput } from "react-native-paper";
import { useParametersContext } from "./ParametersContext";
import styles from "../styles/common";
import { View } from "react-native";
import { useRef } from "react";

const SessionParametersInput = () => {
  const { form } = useParametersContext();
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  return (
    <View>
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
            value={form.bankroll}
            onChangeText={(bankroll) => form.setBankroll(bankroll)}
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
            value={form.betUnit}
            onChangeText={(betUnit) => form.setBetUnit(betUnit)}
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
            value={form.profitGoal}
            onChangeText={(profitGoal) => form.setProfitGoal(profitGoal)}
            keyboardType="numeric"
            placeholder="0"
            ref={inputRef3}
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

export default SessionParametersInput;
