import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () => StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Colors.WHITE,
      },
      text: {
        fontSize: RFValue(25),
        fontWeight: "300",
        color: Colors.BLACK,
      },
});

export default createStyles