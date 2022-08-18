/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons, SIZES, FONTS } from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const em = "ppp";
  const pass = "ppp";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://tradingstatistico.it/area-riservata/api/check-access/by-login-pass?_key=KPXah4CkwMEtYfvoNp8F&login=${username}&pass=${password}`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [password]);

  function checkUser() {}

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icons.tdwhite} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username/Email"
          placeholderTextColor={COLORS.white}
          onChangeText={username => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={COLORS.white}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          checkUser();
          if (data.ok) {
            if (Object.keys(data.subscriptions).length > 0) {
              alert(
                `Login Riuscito con Username: ${data.login} e Password: ${password}`
              );
              navigation.navigate("Main");
            } else
              alert(
                `data.ok= ${data.ok} ---- data.login = ${
                  data.login
                } ------- data.subscription = ${
                  Object.keys(data.subscriptions).length
                }`
              );
          } else navigation.navigate("User");
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },

  image: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.45,
    resizeMode: "contain",
  },

  inputView: {
    backgroundColor: COLORS.secondary,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
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

  loginText: {
    color: COLORS.white,
  },
});
