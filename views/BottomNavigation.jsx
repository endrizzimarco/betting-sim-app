import { BottomNavigation, Text } from "react-native-paper";
import SessionView from "./SessionView";
import SessionDisplay from "./Session";
import { useState } from "react";

const MusicRoute = () => <Text>History</Text>;

const NavigationComponent = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
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
    session: SessionView,
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
