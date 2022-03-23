import { FC } from "react";
import { Image, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IProps {
    iconName: object;
    width: number;
    onPress?: () => void;
    disabled?: boolean;
  }

const IconBtn: FC<IProps> = ({iconName, width, onPress, disabled}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <Image
        source={iconName}
        style={{ width: RFValue(width), height: RFValue(width) }}
      />
    </Pressable>
  );
};

export default IconBtn;
