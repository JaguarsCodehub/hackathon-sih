import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { OnBoarding, Home } from "./screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"OnBoarding"}
      >
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          key={OnBoarding}
        />
        <Stack.Screen name="Home" component={Home} key={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
