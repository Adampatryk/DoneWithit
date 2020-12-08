import colours from "./colours";
import { Platform } from "react-native";

export default {
	colours,
	text: {
		fontSize: 20,
		color: colours.dark,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
