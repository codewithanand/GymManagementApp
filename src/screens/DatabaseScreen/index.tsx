import { Text, View } from "react-native"
import React, { FC, useMemo } from 'react'
import createStyles from './styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native"

interface IProps{
    navigation: NavigationProp<ParamListBase>
}

const fetchMessages = () => {
    fetch('http://localhost:81/MuscleFitness/dbConnect.php', {
        method: 'get',
    })
    .then((response) => {
        response.json()
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        alert("Error! " + error);
    });
}


const DatabaseScreen: FC<IProps> = ({navigation}) =>  {
    const styles = useMemo(() => createStyles(), []);
    return (
        
        <View style={styles.body}>
            <Text style={styles.text}>Database Screen</Text>
            <Text>{fetchMessages}</Text>
        </View>
    )
}

export default DatabaseScreen