import { Text, View } from "react-native"
import React, { FC, useMemo } from 'react'
import createStyles from './styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native"
import BottomNavigation from "../../components/BottomNavigation"

interface IProps{
    navigation: NavigationProp<ParamListBase>
}


const EnquiryScreen: FC<IProps> = ({navigation}) =>  {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Enquiry Screen</Text>
            <BottomNavigation navigationLoc = {navigation} />
        </View>
    )
}

export default EnquiryScreen