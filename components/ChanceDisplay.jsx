import { View, ImageBackground, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import common from "../styles/common";

const getChanceColor = (percentage) => {
  // Calculate the red and green components based on the percentage
  const red = Math.round(255 - percentage * 2.55);
  const green = Math.round(percentage * 2.55);
  return `rgb(${red}, ${green}, 0)`;
};

const ChanceDisplay = ({ sessionData, loading }) => {
  const chance = sessionData.chance.toFixed(2);

  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "rgba(10, 10, 5, 0.4)",
      }}
    >
      <View style={common.column}>
        <Text variant="headlineSmall" style={styles.outlinedText}>
          Current chance
        </Text>
        <Text
          variant="displayLarge"
          style={{ ...styles.outlinedText, color: getChanceColor(chance) }}
        >
          {loading ? (
            <View
              style={{ ...common.row, alignItems: "center", marginLeft: 3 }}
            >
              <ImageBackground
                style={styles.spinner}
                source={require("../assets/spin.gif")}
              />
              <Text style={{ marginLeft: 5 }}> Simulating....</Text>
            </View>
          ) : (
            chance + "%"
          )}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    width: 70,
    height: 70,
  },
  outlinedText: {
    fontWeight: "bold",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default ChanceDisplay;
