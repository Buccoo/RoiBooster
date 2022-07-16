/** @format */

import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
} from "react-native";
import Signal from "./components/Signal";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import Signal2 from "./components/Signal2";
import Signal3 from "./components/Signal3";

const images = new Array(6).fill(
  "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
);
const infoSignal = [1, 2, 3];

const Esiti = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  const navigation = useNavigation();

  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height * 0.1,
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

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        {images.map((e, i) => {
          return (
            <View style={styles.scrollContainer}>
              <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {
                          x: scrollX,
                        },
                      },
                    },
                  ],
                  { useNativeDriver: false }
                )}
                scrollEventThrottle={1}
              >
                {infoSignal.map((num, imageIndex) => {
                  if (num == 1) return <Signal />;
                  else if (num == 2) return <Signal2 />;
                  else if (num == 3) return <Signal3 />;
                })}
              </ScrollView>
              <View style={styles.indicatorContainer}>
                {infoSignal.map((image, imageIndex) => {
                  const width = scrollX.interpolate({
                    inputRange: [
                      windowWidth * (imageIndex - 1),
                      windowWidth * imageIndex,
                      windowWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={imageIndex}
                      style={[styles.normalDot, { width }]}
                    />
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    height: SIZES.height * 0.25,
    alignItems: "center",
    justifyContent: "center",
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
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Esiti;
