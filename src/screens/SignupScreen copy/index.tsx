import { Text, View } from "react-native"
import React, { FC, useMemo } from 'react'
import createStyles from './styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native"

interface IProps{
    navigation: NavigationProp<ParamListBase>
}


const SignupScreen: FC<IProps> = ({navigation}) =>  {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Signup Screen</Text>
        </View>
    )
}

export default SignupScreen