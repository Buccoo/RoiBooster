/** @format */
import React from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES, FONTS } from "../constants";

//SCREEN
import HomeScreen from "./HomeScreen";
import Esiti from "./Esiti";
import User from "./User";

const Tab = createBottomTabNavigator();

//APP COMPONENT
export default function Main() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          activeTintColor: COLORS.gray,
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Esiti",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: SIZES.largeTitle, height: SIZES.h1 }}
                  source={icons.tdwhite}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Esiti"
          component={Esiti}
          options={{
            title: "Esiti",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: SIZES.h1, height: SIZES.h1 }}
                  source={icons.scopridipiu}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            title: "Profilo",
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: SIZES.h1, height: SIZES.h1 }}
                  source={icons.user}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
  },
  tab: {},
});
