import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        marginBottom: 40,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.red,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 12,
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
          // alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 10,
            textAlign: "left",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.black,
            textAlign: "left",
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
            textAlign: "left",
          }}
        >
          {item.price} steps ahead
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
