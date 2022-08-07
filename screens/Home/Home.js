import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OnBoarding")}
        style={{ backgroundColor: "#000", padding: 20 }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
