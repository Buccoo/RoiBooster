/** @format */
import React from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS, SIZES, FONTS } from "./constants";

//SCREEN
import HomeScreen from "./screen/HomeScreen";
import Esiti from "./screen/Esiti";
import User from "./screen/User";
import Main from "./screen/Main";
import Login from "./screen/Login";
import Esiti2 from "./screen/Esiti2";

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
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Esiti2" component={Esiti2} />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Home",
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
            <Stack.Screen
              name="Esiti"
              component={Esiti}
              options={{
                title: "File Esiti",
                tabBarIcon: ({ size, focused, color }) => {
                  return (
                    <Image
                      style={{ width: SIZES.h1, height: SIZES.h1 }}
                      source={icons.esiti}
                    />
                  );
                },
              }}
            />
            <Stack.Screen
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
    backgroundColor: COLORS.secondary,
  },
});
