import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.red,
        ...containerStyle,
      }}
    >
      {/* Calories and favourite */}
      {/*  */}

      {/* Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>

      {/* Info */}
      <View
        style={{
          alignItems: "center",
          marginTop: -20,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            fontWeight: "bold",
            color: COLORS.white,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.white,
            textAlign: "center",
            ...FONTS.body5,
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.h2,
            fontWeight: "bold",
            color: COLORS.white,
          }}
        >
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
