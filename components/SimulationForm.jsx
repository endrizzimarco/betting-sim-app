import { Button, Text, Card } from "@rneui/themed";
import React, { useState } from "react";
import axios from "axios";
import { View } from "react-native";

const SimulationForm = () => {
  const [chance, setChance] = useState(false);

  const callLambda = async () => {
    try {
      const response = await axios.get(
        `https://6csjpnpengggz357h33znqhdhq0crbnp.lambda-url.eu-west-1.on.aws/`
      );
      // Assuming the response contains the chance value
      setChance(response.data);
    } catch (error) {
      console.error("Error calling Lambda:", error);
    }
  };

  return (
    <View>
      <Card>
        {{ chance } ? <Text> The chance is {chance} </Text> : null}
        <Button onPress={callLambda}> PRESS ME </Button>
      </Card>
    </View>
  );
};

export default SimulationForm;
