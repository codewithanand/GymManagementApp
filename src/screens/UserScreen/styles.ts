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

    scrollView: {
      marginBottom: RFValue(64),
      
    },
    header:{
      paddingTop: RFValue(20),
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: RFValue(20),
    },
    gymName: {
      fontSize: RFValue(24),
      fontWeight: '500',
    },
    gymOwner: {
      fontSize: RFValue(18),
    },
    gymContact: {
      fontSize: RFValue(16),
    },
    gymEmail: {
      fontSize: RFValue(14),
    },
  });

export default createStyles;
