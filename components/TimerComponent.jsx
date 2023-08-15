import React, { useState, useEffect } from "react";
import { Text } from "react-native-paper";

function getTimeElapsed(unixTimestamp) {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current UNIX timestamp in seconds
  const elapsedSeconds = currentTimestamp - unixTimestamp;
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);

  if (elapsedHours > 0) {
    return `${elapsedHours}h${elapsedMinutes % 60}m${elapsedSeconds % 60}s`;
  } else if (elapsedMinutes > 0) {
    return `${elapsedMinutes}m${elapsedSeconds % 60}s`;
  } else {
    return `${elapsedSeconds}s`;
  }
}

function TimerComponent() {
  const [sessionStart, setSessionStart] = useState(
    Math.floor(Date.now() / 1000)
  );
  const [elapsedTime, setElapsedTime] = useState(getTimeElapsed(sessionStart));

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(getTimeElapsed(sessionStart));
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionStart]);

  return <Text variant="labelMedium">Duration: {elapsedTime}</Text>;
}

export default TimerComponent;
