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
const labels = [
  "L'operaz. è già in profit?",
  "Var % rispetto a ieri",
  "Var % rispetto al liv. d'ingresso",
  "Entrare a mercato?",
  "Direzione prev. sul daily",
  "Direzione prev. sul weekly",
  "Conferma d'ingr. DY-WY",
  "Concordanza con SBS",
  "Probabilità di profitto",
  "ROI",
  "Liv. di ingresso medio",
  "Liv. di ingresso intraday",
  "Leva massima da utilizzare",
  "Liv. di ingresso estremo",
  "Uscita",
  "Margine medio",
  "Margine massimo",
  "Indicazioni per la chiusura",
];
export default function Signal(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  //------------------------------------------------------------ SIMPLE SIGNAL

  const SimpleSignal = props => {
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
            {props?.simbol?.substring(0, 6)}
          </Text>
        </View>
        <View style={styles.right}>
          <View style={styles.labelValues}>
            {/* INGRESSO MEDIO */}
            <View style={styles.labelValue} key={props.data["ingressoMedio"]}>
              <View style={styles.label}>
                <Text
                  style={{ color: COLORS.white, fontFamily: "Baskerville" }}
                >
                  {label[0]}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.value}
                onPress={() =>
                  alert("Hai copiato negli appunti: " + `${label[0]}`)
                }
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: "Baskerville",
                    fontSize: 18,
                  }}
                >
                  {props?.data["ingressoMedio"]}
                </Text>
              </TouchableOpacity>
            </View>
            {/* TARGET */}
            <View style={styles.labelValue} key={props.data["uscita"]}>
              <View style={styles.label}>
                <Text
                  style={{ color: COLORS.white, fontFamily: "Baskerville" }}
                >
                  {label[1]}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.value}
                onPress={() =>
                  alert("Hai copiato negli appunti: " + `${label[1]}`)
                }
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontFamily: "Baskerville",
                    fontSize: 18,
                  }}
                >
                  {props?.data["uscita"]}
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
                  props?.data["direzioneDaily"] == "SHORT"
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
                {props?.data["direzioneDaily"]}
              </Text>
            </View>
            <TouchableOpacity
              style={{}}
              onPress={() => setIsExpanded(!isExpanded)}
            >
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
  };

  //------------------------------------------------------------  SIGNAL EXPANDED

  const SignalExpanded = props => {
    return (
      <View style={styles.mainCardViewExp}>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: COLORS.black,
            borderBottomWidth: 2,
          }}
        >
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
                  <Text
                    style={{ color: COLORS.white, fontFamily: "Baskerville" }}
                  >
                    {label[0]}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.value}
                  onPress={() =>
                    alert("Hai copiato negli appunti: " + `${label[0]}`)
                  }
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: "Baskerville",
                      fontSize: 18,
                    }}
                  >
                    {props.data["ingressoMedio"]}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* TARGET */}
              <View style={styles.labelValue} key={props.data["uscita"]}>
                <View style={styles.label}>
                  <Text
                    style={{ color: COLORS.white, fontFamily: "Baskerville" }}
                  >
                    {label[1]}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.value}
                  onPress={() =>
                    alert("Hai copiato negli appunti: " + `${label[1]}`)
                  }
                >
                  <Text
                    style={{
                      color: COLORS.white,
                      fontFamily: "Baskerville",
                      fontSize: 18,
                    }}
                  >
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
            </View>
          </View>
        </View>
        {/* --------------------------          SOTTO------------------------------------ */}
        <View
          style={{
            height: SIZES.height * 0.45,
            width: SIZES.width * 0.9,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              height: SIZES.height * 0.35,
              width: SIZES.width * 0.9,
              padding: 10,
            }}
          >
            {Object.keys(props.data).map((d, i) => {
              if (
                d == "ingressoMedio" ||
                d == "uscita" ||
                d == "ROI" ||
                d == "margineMedio" ||
                d == "margineMassimo" ||
                d == "chiusura"
              )
                return;

              return (
                <View key={d + i} style={{ marginTop: 15 }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: 5,
                    }}
                    key={props.data["ingressoMedio"]}
                  >
                    <View
                      style={{
                        flexDirection: "column",
                        height: 40,
                        width: 80,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          fontFamily: "Baskerville",
                          textAlign: "center",
                        }}
                      >
                        {labels[i]}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.value}
                      onPress={() =>
                        alert("Hai copiato negli appunti: " + `${labels[i]}`)
                      }
                    >
                      <Text
                        style={{
                          color:
                            props.data[d] == "SHORT"
                              ? COLORS.red3
                              : props.data[d] == "LONG"
                              ? COLORS.green2
                              : props.data[d] == "IN"
                              ? COLORS.green2
                              : props.data[d] == "SI"
                              ? COLORS.green2
                              : props.data[d] ==
                                "LIVELLO DI STOP LOSS IN PROFIT RAGGIUNTO"
                              ? COLORS.green2
                              : props.data[d] == "NON ENTRARE"
                              ? COLORS.red3
                              : COLORS.white,
                          fontFamily: "Baskerville",
                          fontSize:
                            props.data[d] == "LASCIAR CORRERE"
                              ? 13
                              : props.data[d] ==
                                "LIVELLO DI STOP LOSS IN PROFIT RAGGIUNTO"
                              ? 13
                              : 18,
                          textAlign: "center",
                        }}
                      >
                        {props.data[d] == ""
                          ? "-"
                          : props.data[d] == "NON ENTRARE"
                          ? "NO"
                          : props.data[d] ==
                            "LIVELLO DI STOP LOSS IN PROFIT RAGGIUNTO"
                          ? "SL RAGGIUNTO"
                          : props.data[d] ==
                            "QUELLA COSA DI LASCIAR CHIUDERE ENTRO LE 19"
                          ? "LASCIAR CORRERE"
                          : props.data[d]}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              width: SIZES.width * 0.9,
              height: SIZES.height * 0.1,
              padding: 10,
            }}
          >
            {Object.keys(props.data).map((d, i) => {
              if (
                d == "margineMedio" ||
                d == "margineMassimo" ||
                d == "chiusura"
              )
                return (
                  <View key={d} style={{}}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 20,
                        marginRight: 5,
                      }}
                      key={props.data["ingressoMedio"]}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          height: 40,
                          width: 80,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: COLORS.white,
                            fontFamily: "Baskerville",
                            textAlign: "center",
                          }}
                        >
                          {labels[i]}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.value}
                        onPress={() =>
                          alert("Hai copiato negli appunti: " + `${labels[i]}`)
                        }
                      >
                        <Text
                          style={{
                            color: COLORS.white,
                            fontFamily: "Baskerville",
                            fontSize:
                              labels[i] == "Indicazioni per la chiusura"
                                ? 13
                                : 18,
                            textAlign: "center",
                          }}
                        >
                          {props.data[d] == "LASCIAR CORRERE"
                            ? "LASCIAR CORRERE"
                            : props.data[d]}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
            })}
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
              <Image
                style={{
                  width: 35,
                  height: 35,
                  alignSelf: "flex-end",
                  marginLeft: 40,
                  marginTop: 40,
                  transform: [{ rotate: "180deg" }],
                }}
                source={icons.downarrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>{isExpanded ? SignalExpanded(props) : SimpleSignal(props)}</View>
  );
}

const styles = StyleSheet.create({
  mainCardView: {
    height: SIZES.height * 0.15,
    width: SIZES.width * 0.9,
    alignItems: "center",
    backgroundColor: COLORS.gray,
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
  mainCardViewExp: {
    height: SIZES.height * 0.6,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 20,
  },
  simbolo: {
    height: SIZES.height * 0.15,
    width: SIZES.width * 0.3,
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderRightWidth: 2,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  right: {
    width: SIZES.width * 0.6,
    flexDirection: "row",
  },
  labelValues: {
    width: SIZES.width * 0.2,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
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
