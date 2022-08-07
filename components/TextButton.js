import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FONTS, COLORS } from "../constants";

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
