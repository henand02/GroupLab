import React from "react";
import { StyleSheet, View, ScrollView, Image, Button, } from "react-native";
import { useState } from "react";

//CatPics / Snake - Fredrik Kypta (Grupp 5)

const CatPics = () => {
  const [switchValue, setSwitchValue] = useState(true);
  const toggleSwitch = () => {
    setSwitchValue(!switchValue);
    if (switchValue == true) {
      setViewWidth("auto");
      setViewHeight("auto");
    }
    if (switchValue == false) {
      setViewWidth("auto");
      setViewHeight("auto");
    }
  };

  const [viewWidth, setViewWidth] = useState("auto");
  const [viewHeight, setViewHeight] = useState("auto");

  return (
    <View style={styles.container}>
      <View style={styles.section_C}>
        <Button title="More cat pictures" style={styles.button} onPress={toggleSwitch}> </Button>
        <ScrollView horizontal={switchValue}>
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/grey-scottish-fold-cat-sitting-600w-1661727271.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cute-cat-cardboard-box-600w-538309816.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/ginger-cat-lies-box-on-600w-400678840.jpg",
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: "https://image.shutterstock.com/image-photo/cute-grey-tabby-cat-cardboard-260nw-1526963033.jpg",
            }}
          />
        </ScrollView>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  section_C: {
    width: "70%",
    height: "auto",
    marginTop: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#514F59",
  },

  image: {
    width: 285,
    height: 285,
  },
});

export default CatPics;
