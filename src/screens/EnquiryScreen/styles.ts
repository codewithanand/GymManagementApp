import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
    text: {
      color: Colors.BLACK,
      textAlign: "center",
    },
    searchBox: {
      backgroundColor: Colors.PRIMARY,
      padding: RFValue(5),
    },
    input: {
      textAlign: "center",
      backgroundColor: Colors.WHITE,
      borderRadius: RFValue(6),
      fontSize: RFValue(14),
      padding: RFValue(5),
    },
    scrollView: {
      marginBottom: RFValue(64),
      backgroundColor: Colors.WHITE,
    },
    dropdown: {
      textAlign: "center",
      backgroundColor: Colors.PRIMARY,
      color: Colors.WHITE,
    },
  });

export default createStyles;
