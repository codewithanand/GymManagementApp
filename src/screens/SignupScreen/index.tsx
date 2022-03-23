import { ImageBackground, Text, TextInput, View } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { SIGNUP_BACKGROUND } from "../../assets";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryBtn from "../../components/PrimaryBtn";
import { Colors } from "../../constants/color";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground
        source={SIGNUP_BACKGROUND}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,1)"]}
          style={styles.overlay}
        >
          <Text style={styles.text}>
            Add your details below to setup your account
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor={Colors.GREY}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Password"
            placeholderTextColor={Colors.GREY}
            secureTextEntry={true}
          />
          <View style={styles.footer}>
            <PrimaryBtn
              title="Create Account"
              color={Colors.PRIMARY}
              onPress={() => navigation.navigate("UserScreen")}
              disabled={false}
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;
