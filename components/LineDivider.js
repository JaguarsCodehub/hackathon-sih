import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const LineDivider = ({ lineStyle }) => {
  return (
    <View
      style={{
        height: 2,
        marginTop: 10,
        width: "100%",
        backgroundColor: COLORS.gray3,
        ...lineStyle,
      }}
    ></View>
  );
};

export default LineDivider;
