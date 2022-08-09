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

export default function Signal(props) {
  return (
    <View style={styles.mainCardView}>
      <View style={styles.simbolo}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.gray,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {props.simbol.substring(0, 6)}
        </Text>
      </View>
      <View style={styles.right}>
        <View style={styles.labelValues}>
          {/* INGRESSO MEDIO */}
          <View style={styles.labelValue} key={props.data["ingressoMedio"]}>
            <View style={styles.label}>
              <Text style={{ color: COLORS.white, fontFamily: "Baskerville" }}>
                {label[0]}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.value}
              onPress={() =>
                alert("Hai copiato negli appunti: " + `${label[0]}`)
              }
            >
              <Text style={{ color: COLORS.white, fontFamily: "Baskerville" }}>
                {props.data["ingressoMedio"]}
              </Text>
            </TouchableOpacity>
          </View>
          {/* TARGET */}
          <View style={styles.labelValue} key={props.data["uscita"]}>
            <View style={styles.label}>
              <Text style={{ color: COLORS.white, fontFamily: "Baskerville" }}>
                {label[1]}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.value}
              onPress={() =>
                alert("Hai copiato negli appunti: " + `${label[1]}`)
              }
            >
              <Text style={{ color: COLORS.white, fontFamily: "Baskerville" }}>
                {props.data["uscita"]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ROI + tasto scorpidi più */}
        <View
          style={{
            width: SIZES.width * 0.4,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.terziary,
              fontFamily: "Baskerville",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "right",
              height: SIZES.height * 0.05,
              marginRight: 10,
              marginTop: 10,
            }}
          >
            ROI ATTESO {"\n"} {props.data["ROI"]}
          </Text>
          <View
            style={{
              marginRight: 10,
              backgroundColor:
                props.data["direzioneDaily"] == "SHORT"
                  ? COLORS.red3
                  : COLORS.green1,
              width: 90,
              height: SIZES.height * 0.04,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontFamily: "Baskerville",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {props.data["direzioneDaily"]}
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={{
                width: 35,
                height: 35,
                alignSelf: "flex-end",
                marginRight: 10,
                marginTop: 10,
              }}
              source={icons.downarrow}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardView: {
    height: SIZES.height * 0.15,
    width: SIZES.width * 0.9,
    alignItems: "center",
    backgroundColor: "#565656",
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
  },
  simbolo: {
    height: SIZES.height * 0.15,
    width: SIZES.width * 0.3,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  right: {
    width: SIZES.width * 0.6,
    flexDirection: "row",
  },
  labelValues: {
    width: SIZES.width * 0.2,
    flexDirection: "row",
    flexWrap: "wrap",
    display: "block",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelValue: {
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  value: {
    borderRadius: 4,
    backgroundColor: COLORS.black,
    marginBottom: 10,
    width: SIZES.width * 0.19,
    height: SIZES.height * 0.04,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
