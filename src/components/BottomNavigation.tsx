import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  DOLLAR_ICON,
  GRID_ICON,
  HOME_ICON,
  INFO_ICON,
  PEOPLE_ICON,
} from "../assets";
import { Colors } from "../constants/color";
import IconBtn from "./IconBtn";

const BottomNavigation = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.bottomNav}>
      <IconBtn iconName={PEOPLE_ICON} disabled={false} width={RFValue(28)} />
      <IconBtn iconName={GRID_ICON} disabled={false} width={RFValue(24)} />
      <IconBtn iconName={HOME_ICON} disabled={false} width={RFValue(30)} />
      <IconBtn iconName={DOLLAR_ICON} disabled={false} width={RFValue(24)} />
      <IconBtn iconName={INFO_ICON} disabled={false} width={RFValue(24)} />
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    bottomNav: {
      flex: 1,
      position: "absolute",
      bottom: 0,
      borderTopColor: Colors.GREY,
      borderTopWidth: RFValue(1),
      height: RFValue(64),
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: RFValue(20),
      paddingRight: RFValue(20),
    },
  });

export default BottomNavigation;
