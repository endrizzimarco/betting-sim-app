import { useParametersContext } from "../components/ParametersContext";
import ResponsiveView from "../components/ResponsiveView";
import SessionResult from "../components/SessionResult";
import SessionForm from "./SessionForm";
import { useState } from "react";
import Session from "./Session";

const winImage = require("../assets/cat-jump.gif");
const loseImage = require("../assets/fortnite-dance.gif");

const SessionView = () => {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startNewSession, setStartNewSession] = useState(false);
  const { resetFields } = useParametersContext();

  if (startNewSession) {
    resetFields();
    setStartNewSession(false);
    setGameOver(false);
    setSessionStarted(false);
  }

  return (
    <ResponsiveView>
      {sessionStarted === false ? (
        <SessionForm startSession={setSessionStarted} />
      ) : gameOver === false ? (
        <Session sessionOver={setGameOver} />
      ) : gameOver === "win" ? (
        <SessionResult
          newSession={setStartNewSession}
          image={winImage}
          text="You win!"
        />
      ) : (
        <SessionResult
          newSession={setStartNewSession}
          image={loseImage}
          text="L BOZO"
        />
      )}
    </ResponsiveView>
  );
};

export default SessionView;
