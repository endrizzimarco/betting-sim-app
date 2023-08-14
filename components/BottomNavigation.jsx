import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import SimulationForm from "./SimulationForm";
import SessionDisplay from "./SessionDisplay";
import { ImageBackground, StyleSheet } from "react-native";

const MusicRoute = () => <Text>History</Text>;

const NavigationComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "session",
      title: "Session",
      focusedIcon: "slot-machine",
      unfocusedIcon: "slot-machine-outline",
    },
    {
      key: "optimise",
      title: "Optimise",
      focusedIcon: "laptop",
    },
    { key: "history", title: "History", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    session: SimulationForm,
    optimise: SessionDisplay,
    history: MusicRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact
      keyboardHidesNavigationBar={false} // using pan for keyboard, avoids flickering
      sceneAnimationEnabled
      sceneAnimationType="shifting"
    />
  );
};

export default NavigationComponent;
