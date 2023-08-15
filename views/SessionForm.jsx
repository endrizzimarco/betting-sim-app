import SessionParametersInput from "../components/SessionParametersInput";
import { useParametersContext } from "../components/ParametersContext";
import { Button, Card, HelperText } from "react-native-paper";
import StrategyInput from "../components/StrategyInput";
import responsiveSize from "../utils/calculateWidth.js";
import GameInput from "../components/GameInput";
import { Dimensions } from "react-native";
import styles from "../styles/common";
import { useState } from "react";

const SessionForm = ({ startSession }) => {
  const [missing, setMissing] = useState(null);
  const { resetFields, form } = useParametersContext();
  const screenWidth = Dimensions.get("window").width;

  const validateForm = () => {
    setMissing(null);
    if (form.strategy == "") {
      setMissing("strategy");
    } else if (form.bankroll == "") {
      setMissing("bankroll");
    } else if (form.betUnit == "") {
      setMissing("bet unit");
    } else if (form.profitGoal == "") {
      setMissing("profit goal");
    } else {
      startSession();
    }
  };

  return (
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
      <Card.Actions style={{ marginBottom: 5 }}>
        <Button onPress={resetFields}>RESET</Button>
        <Button onPress={validateForm}>START SESSION</Button>
      </Card.Actions>
    </Card>
  );
};

export default SessionForm;
