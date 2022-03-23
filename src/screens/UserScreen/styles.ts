import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: Colors.WHITE,
      paddingTop: RFValue(30),
    },
    navbar: {
      height: RFValue(64),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: Colors.PRIMARY,
      color: Colors.WHITE,
      paddingLeft: RFValue(20),
      paddingTop: RFValue(20),
      paddingRight: RFValue(20),
      paddingBottom: RFValue(20),
    },
    scrollView: {
      marginBottom: RFValue(64),
    },
    bottomNav: {
      flex: 1,
      position: "absolute",
      bottom: 0,
      borderTopColor: Colors.GREY,
      borderTopWidth: RFValue(2),
      height: RFValue(64),
      width: "100%",
    },
  });

export default createStyles;
