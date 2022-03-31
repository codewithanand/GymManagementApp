import { FC, useMemo } from "react"
import { Image, StyleProp, StyleSheet, TextStyle, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";

interface IProps{
    width: number,
    src: any,
    style?: StyleProp<TextStyle>,
}

const ProfilePicture : FC<IProps> = ({width, src, style}) => {
    const styles = useMemo(() => createStyles(), []);
    return(
        <Image source={src} style={[styles.image, {width: width, height: width, borderRadius: RFValue(width/2)}, style]}/>
    )
}

const createStyles = () =>
  StyleSheet.create({
    image:{
        
    },
  })

export default ProfilePicture