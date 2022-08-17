import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 12,
      }}
      onPress={() => navigation.navigate("Search")}
      accessible={true}
      accessibilityLabel="This is Search bar component, You can filter rooms based upon the Floor Cards given below"
      accessibilityHint="Double Tap on any Floor Card below and you will get the Rooms Card just below it"
    >
      <Image
        source={icons.search}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray,
        }}
      />
      <TextInput
        style={{
          marginLeft: SIZES.radius,
          ...FONTS.body3,
        }}
        placeholderTextColor={COLORS.gray}
        placeholder="Search Floors"
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
