/** @format */
import React from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES, FONTS } from "./constants";

//SCREEN
import HomeScreen from "./screen/HomeScreen";
import Esiti from "./screen/Esiti";
import User from "./screen/User";

const Tab = createBottomTabNavigator();

//APP COMPONENT
export default function App() {
  const [isFontReady, setFontReady] = React.useState(false);

  React.useEffect(() => {
    async function loadFont() {
      return await Font.loadAsync({
        "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      });
    }
    // after the loading set the font status to true
    loadFont().then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <View style={styles.container}>
      {!isFontReady ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Esiti" component={Esiti} />
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
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
    backgroundColor: COLORS.secondary,
  },
});
