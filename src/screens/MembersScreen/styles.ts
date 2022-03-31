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
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    scrollView: {
      marginBottom: RFValue(64),
      backgroundColor: Colors.LIGHT_GREY,
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
    categoryBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: RFValue(10),
      paddingRight: RFValue(10),
    },
    dropdown: {
      flex: 1,
      textAlign: "center",
    },
  });

export default createStyles;
