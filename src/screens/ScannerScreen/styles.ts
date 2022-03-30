import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: "#777",
    },
    textBold: {
      fontWeight: "500",
      color: "#000",
    },
    buttonText: {
      fontSize: 21,
      color: "rgb(0,122,255)",
    },
    buttonTouchable: {
      padding: 16,
    },
  });

export default createStyles;
