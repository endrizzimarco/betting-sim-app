import { Text, Divider } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { useParametersContext } from "./ParametersContext";
import styles from "../styles/common";
import { View } from "react-native";
import { useEffect } from "react";
import axios from "axios";

const createLabelValueObjectArray = (inputArray) => {
  const result = inputArray.map((value) => {
    const label = value
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { label, value };
  });
  return result;
};

const getStrategies = async (form) => {
  try {
    const response = await axios.get("/", {
      params: { type: "get_strategies" },
    });
    console.log(response);
    const strategyList = createLabelValueObjectArray(response.data);
    form.setStrategyList(strategyList);
  } catch (error) {
    console.error("Error calling Lambda:", error);
  }
};

const StrategyInput = () => {
  const { form } = useParametersContext();

  useEffect(() => {
    getStrategies(form);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <View>
      <Text variant="bodyLarge"> Betting Strategy </Text>
      <Divider bold style={styles.divider} />
      <DropDown
        placeholder="Select a strategy"
        mode="outlined"
        visible={form.showDropDown}
        showDropDown={() => form.setShowDropDown(true)}
        onDismiss={() => form.setShowDropDown(false)}
        value={form.strategy}
        setValue={form.setStrategy}
        list={form.strategyList}
        dropDownItemTextStyle={{ color: "#E4DFE3" }}
        dropDownItemStyle={{
          borderColor: "#E4DFE3",
          borderWidth: 0.15,
          borderRadius: 2,
        }}
        dropDownItemSelectedStyle={{
          borderColor: "#D0BCFF",
          borderWidth: 0.4,
          borderRadius: 2,
        }}
      />
    </View>
  );
};

export default StrategyInput;
