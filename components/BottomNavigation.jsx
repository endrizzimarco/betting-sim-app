import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import SimulationForm from "./SimulationForm";
import SessionDisplay from "./SessionDisplay";
import { ImageBackground, StyleSheet } from "react-native";

const Background = (props) => (
  <ImageBackground
    source={require("../assets/bg.jpg")}
    style={styles.container}
  >
    {props.children}
  </ImageBackground>
);

const withBgWrapper = (Component) => {
  return () => (
    <Background>
      <Component />
    </Background>
  );
};

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
    session: withBgWrapper(SimulationForm),
    optimise: withBgWrapper(SessionDisplay),
    history: MusicRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact
      sceneAnimationEnabled
      sceneAnimationType="shifting"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});

export default NavigationComponent;
