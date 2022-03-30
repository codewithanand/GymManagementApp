import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FC, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../constants/color";
import IconBtn from "./IconBtn";

interface IProps{
  firstIcon: object;
  secondIcon?: any;
  navigation: NavigationProp<ParamListBase>
}

const TopNavigation: FC<IProps> = ({firstIcon, secondIcon, navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.navbar}>
      <IconBtn iconName={firstIcon} width={24} onPress={() => navigation.navigate('NavigationScreen')} />
      <IconBtn iconName={secondIcon} width={24} />
    </View>
  );
};

const createStyles = () => StyleSheet.create({
    navbar: {
        height: RFValue(64),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.PRIMARY,
        color: Colors.WHITE,
        paddingLeft: RFValue(20),
        paddingTop: RFValue(50),
        paddingRight: RFValue(20),
        paddingBottom: RFValue(30),
      },
});

export default TopNavigation;
