import SessionForm from "./SessionForm";
import Session from "./Session";
import { View } from "react-native";
import { useState } from "react";
import styles from "../styles/common";

const SessionView = () => {
  const [sessionStarted, setSessionStarted] = useState(false);

  return (
    <View style={styles.page}>
      {sessionStarted === false ? (
        <SessionForm startSession={setSessionStarted} />
      ) : (
        <Session />
      )}
    </View>
  );
};

export default SessionView;
