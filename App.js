/** @format */
import React from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES, FONTS } from "./constants";

//SCREEN
import HomeScreen from "./screen/HomeScreen";
import Esiti from "./screen/Esiti";
import User from "./screen/User";
import Main from "./screen/Main";
import Login from "./screen/Login";

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Esiti" component={Esiti} />
            <Stack.Screen name="User" component={User} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    width: SIZES.width,
  },
});
