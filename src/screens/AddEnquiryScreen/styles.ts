import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: Colors.LIGHT_GREY,
    },
    text: {
      fontSize: RFValue(16),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    section:{
      marginBottom: RFValue(5),
      backgroundColor: Colors.WHITE,
      justifyContent: 'center',
      padding: 20,
    },
    dropdown: {
      flex: 1,
      marginBottom: 10,
    },
    input:{
      fontSize: RFValue(16),
      borderBottomColor: Colors.BLACK,
      borderBottomWidth: 1,
      marginBottom: 10,
      padding: 5,
    },
    textarea:{
      borderColor: Colors.GREY,
      borderWidth: 1,
      marginBottom: 10,
      height: 90,
    }
  });

export default createStyles;
