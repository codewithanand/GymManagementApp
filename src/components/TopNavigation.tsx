import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BELL_ICON, MENU_ICON } from "../assets";
import { Colors } from "../constants/color";
import IconBtn from "./IconBtn";

const TopNavigation = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.navbar}>
      <IconBtn iconName={MENU_ICON} width={24} />
      <IconBtn iconName={BELL_ICON} width={24} disabled={true} />
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
        paddingTop: RFValue(20),
        paddingRight: RFValue(20),
        paddingBottom: RFValue(20),
      },
});

export default TopNavigation;
