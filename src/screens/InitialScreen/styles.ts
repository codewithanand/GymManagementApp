import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () => StyleSheet.create({
    body:{
        width: '100%',
        flex: 1,
    },
    text:{
        fontSize: RFValue(25),
        fontWeight: '300',
        color: Colors.LIGHT_GREY,
        textAlign: "center",
        marginHorizontal: RFValue(50),
    },
    background:{
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    overlay:{
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    logo:{
        width: RFValue(130),
        height: RFValue(50),
        marginTop: RFValue(100),
        marginBottom: RFValue(20),

    },
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginBottom: RFValue(20),
    },
    loginText:{
        fontSize: RFValue(20),
        marginTop: RFValue(20),
        color: Colors.LIGHT_GREY,
        marginBottom: RFValue(50),
        textAlign: 'center',
        fontWeight: '500',
    }
});

export default createStyles