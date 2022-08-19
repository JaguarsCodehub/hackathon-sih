import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HorizontalFoodCard = ({ containerStyle, item, imageStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        // marginTop: 40,
        borderRadius: 20,
        backgroundColor: COLORS.lightGray1,
        padding: 20,
        ...containerStyle,
      }}
    >
      {/* Image */}
      <Image source={item.image} style={imageStyle} />

      {/* Info */}
      <View
        style={{
          flex: 1,
          marginLeft: 20,
        }}
      >
        {/* Name */}
        <Text
          style={{
            ...FONTS.h3,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>

        {/* Description */}
        <Text
          style={{
            color: COLORS.darkGray2,
            ...FONTS.body4,
          }}
        >
          {item.description}
        </Text>

        <Text
          style={{
            marginTop: SIZES.base,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {item.price} steps ahead
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
