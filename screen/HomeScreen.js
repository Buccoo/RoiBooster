/** @format */
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";

//HOMESCREEN COMPONENT
export default function HomeScreen() {
  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.15,
          backgroundColor: COLORS.primary,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            marginTop: 50,
          }}
        >
          HOME
        </Text>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View
        style={{
          height: SIZES.height,
          backgroundColor: COLORS.white,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            width: SIZES.width * 0.7,
            height: 50,
            marginTop: 300,
            borderRadius: SIZES.radius * 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Esiti")}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}
          >
            FILE ESITI
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.green1,
            width: SIZES.width * 0.7,
            height: 50,
            marginTop: 20,
            borderRadius: SIZES.radius * 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}
          >
            FILE PER ANTIMARTINGALA
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
});
