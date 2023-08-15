import React, { useState, useEffect } from "react";
import { Dimensions, View } from "react-native";

const responsiveSize = (screenWidth) => {
  if (screenWidth < 600) return "100%";
  else if (screenWidth < 1000) return "60%";
  else if (screenWidth < 1500) return "35%";
  else return "25%";
};

const ResponsiveView = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", handleResize);

    return () => {
      if (Dimensions.removeEventListener) {
        Dimensions.removeEventListener("change", handleResize);
      }
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: responsiveSize(screenWidth),
          flex: 1,
          justifyContent: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default ResponsiveView;
