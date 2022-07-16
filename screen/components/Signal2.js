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
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from "react-native-table-component";

//HOMESCREEN COMPONENT
const CONTENT = {
  tableHead: [
    "DIREZIONE PREVISTA SUL DAILY",
    "DIREZIONE PREVISTA SUL WEEKLY",
    "CONFERMA DI INGRESSO DAILY E WEEKLY",
  ],
  tableHead2: [
    "Statistic Black Swan™️",
    "DIREZIONE PREVISTA SUL WEEKLY",
    "DIREZIONE PREVISTA SUL WEEKLY",
  ],
  tableData: [["1", "2", "3"]],
};

export default function Signal2() {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableTitle}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />
            <Rows
              data={CONTENT.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
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
    backgroundColor: COLORS.white,
    borderRadius: 0,
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    marginTop: 15,
  },
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 49 },
  text: { textAlign: "center", fontSize: 12 },
});
