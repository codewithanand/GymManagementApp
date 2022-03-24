import { FC, useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ARROW_RIGHT_ICON } from "../assets";
import { Colors } from "../constants/color";
import IconBtn from "./IconBtn";

interface IProps {
  iconName: any;
  btnName: string;
  countItem?: number;
  onPress?: () => void;
}

const ListBtn: FC<IProps> = ({ iconName, btnName, countItem }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <Pressable style={styles.listNav}>
      <View style={styles.listNavIcon}>
        <IconBtn iconName={iconName} disabled={false} width={RFValue(20)} />
        <Text style={{ marginLeft: RFValue(10)}}>
          {btnName}
        </Text>
      </View>
      <View style={styles.listNavIcon}>
        <Text>{countItem}</Text>
        <IconBtn
          iconName={ARROW_RIGHT_ICON}
          disabled={false}
          width={RFValue(20)}
        />
      </View>
    </Pressable>
  );
};

const createStyles = () =>
  StyleSheet.create({
    listNav: {
      padding: RFValue(10),
      paddingLeft: RFValue(20),
      paddingRight: RFValue(20),
      borderColor: Colors.LIGHT_GREY,
      borderBottomWidth: RFValue(1),
      borderTopWidth: RFValue(1),
      marginTop: RFValue(5),
      marginBottom: RFValue(5),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listNavIcon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });
export default ListBtn;
