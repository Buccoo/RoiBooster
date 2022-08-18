/** @format */

import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  AnimatedFlatList,
  FlatList,
} from "react-native";
import Signal from "./components/Signal";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
// import Signal2 from "./components/Signal2";
// import Signal3 from "./components/Signal3";

const images = new Array(6).fill(
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
);
const data = require("../sheets.json");

const Esiti = () => {
  const [multiplier, setMultiplier] = useState(3);
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const keys = Object.keys(data);

  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.15,
          backgroundColor: COLORS.white,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            fontFamily: "Baskerville",
            color: COLORS.black,
            marginLeft: 40,
            marginTop: 30,
          }}
        >
          ESITI
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles(multiplier).contentContainerStyle}
      >
        {keys.map((s, i) => {
          return <Signal simbol={s} data={data[s]} key={s + i} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = multiplier =>
  StyleSheet.create({
    container: {
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: COLORS.white,
    },
    contentContainerStyle: {
      alignItems: "center",
      height: SIZES.height * multiplier,
      backgroundColor: COLORS.white,
    },
    card: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 16,
      borderRadius: 5,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
    },
    textContainer: {
      backgroundColor: "rgba(0,0,0, 0.7)",
      paddingHorizontal: 24,
      paddingVertical: 8,
      borderRadius: 5,
    },
    infoText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default Esiti;
