import { FC } from "react";
import { Pressable, Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import IconBtn from "./IconBtn";

interface IProps{
    iconName: object;
    title: string;
    width: number;
    onPress?: () => void;
}

const NamedIconBtn: FC<IProps> = ({iconName, title, width, onPress}) => {
  return (
    <Pressable onPress={onPress} style={{ alignItems: "center", marginLeft: RFValue(6), marginRight: RFValue(6) }}>
      <IconBtn iconName={iconName} width={RFValue(width)} />
      <Text style={{ fontSize: RFValue(5) }}>{title}</Text>
    </Pressable>
  );
};

export default NamedIconBtn;
