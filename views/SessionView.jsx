import SimulationForm from "../components/SimulationForm";
import Session from "../components/Session";
import { View } from "react-native";
import { useState } from "react";
import styles from "../styles/common";

const SessionView = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <View style={styles.page}>
      {sessionStarted === true ? (
        <SimulationForm startSession={setSessionStarted} />
      ) : (
        <Session />
      )}
    </View>
  );
};

export default SessionView;
