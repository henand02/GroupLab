import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';

//Snake - Fredrik Kypta (Grupp 5)
import CatPics from './src/CatPics';

//AddBlogText - Ploo Jompong (Grupp 7)
import AddBlogText from './src/AddBlogText';

//ContactComponent ( + CustomCombo) - Henrik Andersson (Grupp 7) + Johan Näsvall (Grupp 6)
import ContactComponent from './src/ContactComponent';

//GiveYourToscans - David Zirath (Grupp 3)
import GiveYourToscans from './src/GiveYourToscans';

//UslessTextInput (namnbyte från App) - Oskar Hultman (Grupp 4)
import UselessTextInput from './src/UselessTextInput';

//MyLittleComponent - Oskar Larsson (Grupp 2)
import MyLittleComponent from './src/MyLittleComponent';

//LandingP - Michaela Beyer (Grupp 7)
import LandingP from './src/LandingP';



export default function App() {
  return (
    <View style={main.container}>
      <View style={main.section}>
        <CatPics />
        <AddBlogText />
        <GiveYourToscans />
        <UselessTextInput />
        <MyLittleComponent />
        <ContactComponent />
        <LandingP />
        <StatusBar style="auto" />
      </View >
    </View >
  );
}

const main = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#514F59",
  },

  section: {
    width: "90%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#e3e3e3",
  },
});