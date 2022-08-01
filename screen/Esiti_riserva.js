/** @format */
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import Signal from "./components/Signal";

//HOMESCREEN COMPONENT
export default function Esiti_riserva() {
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
          ESITI
        </Text>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: COLORS.white,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Signal />
        </View>
      </ScrollView>
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
