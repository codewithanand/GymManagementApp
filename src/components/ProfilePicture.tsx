import { FC, useMemo } from "react"
import { Image, StyleSheet, View } from "react-native"
import { RFValue } from "react-native-responsive-fontsize";

interface IProps{
    width: number,
    src: any,
}

const ProfilePicture : FC<IProps> = ({width, src}) => {
    const styles = useMemo(() => createStyles(), []);
    return(
        <Image source={src} style={[styles.image, {width: width, height: width, borderRadius: RFValue(width/2)}]}/>
    )
}

const createStyles = () =>
  StyleSheet.create({
    image:{
        
    },
  })

export default ProfilePicture