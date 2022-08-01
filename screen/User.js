/** @format */
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";

//HOMESCREEN COMPONENT
export default function User() {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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
          PROFILO
        </Text>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.5,
          backgroundColor: COLORS.white,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          CIAOIOOOOOOOOOOOOOo
        </Text>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => console.log("vciso")}
        >
          <Text>PRESS</Text>
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
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLORS.primary,
  },
});
