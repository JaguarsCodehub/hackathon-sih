import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  OnBoarding,
  Home,
  Directions,
  Map,
  Login,
  Post,
  AddPostScreen,
  Bus,
  Schools,
  PublicPlace,
} from "./screens";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import MainLayout from "./screens/MainLayout";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
          initialRouteName={"OnBoarding"}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            // key={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            key={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bus"
            component={Bus}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Schools"
            component={Schools}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PublicPlace"
            component={PublicPlace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddPostScreen"
            component={AddPostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Directions"
            component={Directions}
            options={{
              headerTitle: "Direction Matrix Route ",
              headerTitleStyle: { letterSpacing: -0.5 },
              headerBackAccessibilityLabel: "",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
