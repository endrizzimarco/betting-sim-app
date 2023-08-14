import SessionParametersInput from "./SessionParametersInput";
import { Button, Card, HelperText } from "react-native-paper";
import { useParametersContext } from "./ParametersContext";
import { Dimensions, View } from "react-native";
import StrategyInput from "./StrategyInput";
import styles from "../styles/common";
import GameInput from "./GameInput";
import { useState } from "react";

const responsiveSize = (screenWidth) => {
  if (screenWidth < 500) return "100%";
  else if (screenWidth < 1000) return "50%";
  else if (screenWidth < 1500) return "33%";
  else return "25%";
};

const SimulationForm = () => {
  const [missing, setMissing] = useState(null);
  const { resetFields, form } = useParametersContext();
  const screenWidth = Dimensions.get("window").width;

  const validateForm = () => {
    setMissing(null);
    console.log(form.strategy);
    if (form.strategy == "") {
      setMissing("strategy");
    } else if (form.bankroll == "") {
      setMissing("bankroll");
    } else if (form.betUnit == "") {
      setMissing("bet unit");
    } else if (form.profitGoal == "") {
      setMissing("profit goal");
    } else {
      console.log("some event goes here i am not sure yet");
    }
  };

  return (
    <View style={styles.page}>
      <Card
        elevation={2}
        style={[styles.card, { width: responsiveSize(screenWidth) }]}
      >
        <Card.Content>
          <StrategyInput />
          <SessionParametersInput />
          <GameInput />
        </Card.Content>
        <HelperText
          type="error"
          visible={missing}
          style={{ marginTop: 10, marginLeft: 5 }}
        >
          Select a {missing}!
        </HelperText>
        <Card.Actions>
          <Button onPress={resetFields}>RESET</Button>
          <Button onPress={validateForm}>START SESSION</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default SimulationForm;
