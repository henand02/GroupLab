import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground, } from "react-native";
import { useState } from "react";

//MyLittleComponent - Oskar Larsson (Grupp 2)

const MyLittleComponent = () => {
  const [textColor, setTextColor] = useState("#c84630");
  const setTextToWhite = () => setTextColor("black");

  const [valueBTC, setValueBTC] = useState(57000);
  const setToSEK = () => setValueBTC(valueBTC * 9 + " kr");

  const [valueETH, setValueETH] = useState(4333);
  const setETHToSEK = () => setValueETH(valueETH * 9 + " kr");

  const [valueLRC, setValueLRC] = useState(2.93);
  const setLRCToSEK = () => setValueLRC(valueLRC * 9 + " kr");

  const [valueSOL, setValueSOL] = useState(206);
  const setSOLToSEK = () => setValueSOL(valueSOL * 9 + " kr");

  const [valueADA, setValueADA] = useState(1.58);
  const setADAToSEK = () => setValueADA(valueADA * 9 + " kr");

  const [valueDOGE, setValueDOGE] = useState(0.212);
  const setDOGEToSEK = () => setValueDOGE(valueDOGE * 9 + " kr");

  const bundle = () => {
    setToSEK();
    setETHToSEK();
    setLRCToSEK();
    setSOLToSEK();
    setADAToSEK();
    setDOGEToSEK();
  };

  const image = {
    uri: "https://www.ixpap.com/images/2021/03/cat-wallpaper-ixpap.jpg",
  };

  return (
    <View style={styles.container}>
      <View style={styles.section_F}>
        <ImageBackground source={image} resizeMode="cover">
          <View style={styles.top}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 60,
                color: "#c84630",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              Cat Price
            </Text>
          </View>
          <View style={styles.middle}>
            <View style={styles.insideMiddle}>
              <View style={styles.insideMiddleLeft}>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow
                </Text>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow2
                </Text>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow3
                </Text>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow4
                </Text>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow5
                </Text>
                <Text
                  style={{
                    color: textColor,
                    fontWeight: "bold",
                    fontSize: 28,
                  }}
                >
                  Meow6
                </Text>
              </View>
              <View style={styles.insideMiddleRight}>
                <Text style={styles.textStyle}>{valueBTC}</Text>
                <Text style={styles.textStyle}>{valueETH}</Text>
                <Text style={styles.textStyle}>{valueLRC}</Text>
                <Text style={styles.textStyle}>{valueSOL}</Text>
                <Text style={styles.textStyle}>{valueADA}</Text>
                <Text style={styles.textStyle}>{valueDOGE}</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.button}>
              <Button
                title="??ndra f??rg p?? namnen"
                onPress={setTextToWhite}
                style={styles.button}
              ></Button>
            </View>
            <View style={styles.bottom}>
              <Button title="??ndra fr??n DOLLAR till SEK" onPress={bundle}></Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  section_F: {
    width: "70%",
    height: "auto",
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
    justifyContent: "space-between",
  },

  top: {
    textAlign: "center",
  },

  insideMiddle: {
    width: "100%",
    padding: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#99E2FF",
    borderRadius: 15,
  },

  bottom: {
    padding: 5,
  },

  button: {
    marginBottom: 5,
  },

  textStyle: {
    fontWeight: "bold",
    fontSize: 28,
  },
});

export default MyLittleComponent;
