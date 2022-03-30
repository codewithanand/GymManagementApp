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
      fontSize: RFValue(28),
      fontWeight: "300",
      color: Colors.WHITE,
      textAlign: "center",
      marginHorizontal: RFValue(50),
      marginBottom: RFValue(50),
    },
    background: {
      width: "100%",
      flex: 1,
      alignItems: "center",
    },
    overlay: {
      width: "100%",
      height: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      marginBottom: RFValue(70),
    },
    input: {
      width: "70%",
      height: RFValue(40),
      margin: RFValue(10),
      borderBottomWidth: RFValue(1),
      borderBottomColor: Colors.GREY,
      padding: RFValue(10),
      color: Colors.WHITE,
    },
  });

export default createStyles;
