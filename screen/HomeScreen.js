/** @format */
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
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
          backgroundColor: COLORS.white,
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.black,
            marginLeft: 40,
            marginTop: 30,
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
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
});
