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
      padding: 10,
      backgroundColor: Colors.LIGHT_GREY,

    },
    dashboardCard:{
      backgroundColor: Colors.WHITE,
      marginBottom: 10,
      padding: 20,
    },
    heading:{
      fontSize: RFValue(16),
      fontWeight: '500',
      paddingTop: 10,
      paddingBottom: 10,
    },
    dashboardButtons:{
      borderTopColor: Colors.GREY,
      borderTopWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });

export default createStyles;
