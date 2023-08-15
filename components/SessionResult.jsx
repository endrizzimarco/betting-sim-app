import * as Animatable from "react-native-animatable";
import { View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

const SessionResult = ({ image, text, newSession }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} style={{ flex: 1 }}>
        <Animatable.Text
          animation="flash"
          iterationCount="infinite"
          style={{
            flex: 1,
            marginTop: 20,
            fontSize: 80,
            textAlign: "center",
            color: "white",
            textShadowOffset: { width: -20, height: 20 },
            textShadowRadius: 10,
          }}
        >
          {text}
        </Animatable.Text>
      </ImageBackground>
      <Button
        onPress={() => newSession(true)}
        mode="elevated"
        style={{
          position: "absolute",
          bottom: 30,
          width: "100%",
        }}
      >
        START NEW SESSION
      </Button>
    </View>
  );
};

export default SessionResult;
