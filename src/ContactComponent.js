import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

//CustomCompo - Henrik Andersson (Grupp 6)

import CustomCompo from "./CustomCompo";

const ContactComponent = () => {
	const [text1, onChangeText1] = React.useState("Useless Text");
	const [text2, onChangeText2] = React.useState("Useless Text");
	const [text3, onChangeText3] = React.useState("Useless Text");

	const [number1, onChangeNumber1] = React.useState(null);
	const [number2, onChangeNumber2] = React.useState(null);
	const [number3, onChangeNumber3] = React.useState(null);

	return (
		<View style={styles.container}>

			< Text style={styles.header} >Contact Us</Text >
			<View style={styles.section_B}>

				<View style={styles.border}>
					<TextInput style={styles.textInput} onChangeText2={onChangeNumber1} value={number1} placeholder="Enter your Name" keyboardType="numeric" />
				</View>

				<View style={styles.border}>
					<TextInput style={styles.textInput} onChangeText2={onChangeNumber2} value={number2} placeholder="Enter a valid email address" keyboardType="numeric" />
				</View>

				<View style={styles.border}>
					<TextInput style={styles.textInput} onChangeText3={onChangeNumber3} value={number3} placeholder="Enter your message" keyboardType="numeric" />
				</View>

				<CustomCompo />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "auto",
		alignItems: "center",
		justifyContent: "center",
	},

	header: {
		fontSize: 24,
		textAlign: "center",
		marginTop: 20,
		color: "#c84630",
	},

	section_B: {
		width: "70%",
		height: "auto",
		marginTop: 5,
		marginBottom: 20,
		padding: 10,
		borderWidth: 1,
		borderColor: "#514F59",
		justifyContent: "space-between",
	},

	border: {
		borderWidth: 1,
		borderColor: "#514F59",
		marginBottom: 8,
	},

	textInput: {
		width: "100%",
		height: 30,
		backgroundColor: "#99E2FF",
		padding: 5,
	},
});

export default ContactComponent;