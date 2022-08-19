import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const HeaderPost = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Aap Ki Suvidha
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddPostScreen")}>
          <AntDesign name="plussquare" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderPost;
