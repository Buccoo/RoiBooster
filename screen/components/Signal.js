/** @format */
import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  COLORS,
  icons,
  SIZES,
  FONTS,
} from "D:/Programmazione/RoiBooster/constants";
import { useNavigation } from "@react-navigation/native";

//HOMESCREEN COMPONENT
export const label = ["Ingresso", "Target"];
export const ROI = "728,33%";
export const valori = ["1.9429", "1.8345"];

export default function Signal() {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <View style={styles.simbolo}>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.white,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            GBPAUD
          </Text>
        </View>
        <View style={styles.right}>
          <View style={styles.labelValues}>
            {valori.map((s, i) => (
              <View style={styles.labelValue} key={s + i}>
                <View style={styles.label}>
                  <Text style={{ color: COLORS.white }}>{label[i]}</Text>
                </View>
                <TouchableOpacity
                  style={styles.value}
                  onPress={() =>
                    alert("Hai copiato negli appunti: " + `${label[i]}`)
                  }
                >
                  <Text style={{ color: COLORS.white }}>{s}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* ROI + tasto scorpidi più */}
          <View
            style={{
              width: SIZES.width * 0.32,
              marginTop: 10,
              marginRight: 10,
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                color: "lightgreen",
                fontSize: 18,
                fontWeight: "bold",
                width: 90,
                height: SIZES.height * 0.03,
                marginLeft: 20,
              }}
            >
              ROI {ROI}
            </Text>
            <View
              style={{
                backgroundColor: COLORS.red3,
                width: 90,
                height: SIZES.height * 0.04,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                SHORT
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignSelf: "flex-end",
                }}
                source={icons.scopridipiu}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
  mainCardView: {
    height: SIZES.height * 0.2,
    width: SIZES.width * 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 0,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 6,
    borderRightWidth: 0,
  },
  simbolo: {
    height: SIZES.height * 0.12,
    width: SIZES.width * 0.25,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  right: {
    width: SIZES.width * 0.6,
    flexDirection: "row",
  },
  labelValues: {
    width: SIZES.width * 0.2,
    flexDirection: "column",
    flexWrap: "wrap",
    display: "block",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelValue: { alignItems: "center", justifyContent: "space-between" },
  value: {
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginBottom: 10,
    width: SIZES.width * 0.19,
    height: SIZES.height * 0.04,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
