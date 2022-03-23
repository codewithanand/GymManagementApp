import React, { FC, useMemo } from "react";
import {
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../constants/color";

interface IProps {
  title: string;
  color: string;
  onPress?: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const PrimaryBtn: FC<IProps> = ({
  title,
  color,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <Pressable
      style={[
        styles.btn,
        { backgroundColor: disabled ? Colors.GREY : color },
        buttonStyle
      ]}
      onPress={onPress}
      disabled={disabled}
    >
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const createStyles = () =>
  StyleSheet.create({
    btn: {
        width: '70%',
        alignSelf: 'center',
        padding: RFValue(10),
        borderRadius: RFValue(5),
        alignItems: 'center'
    },
    text: {
        color: Colors.WHITE,
        fontSize: RFValue(22),
    },
  });

export default PrimaryBtn;
