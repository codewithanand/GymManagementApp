import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { INTIAL_BACKGROUND, LOGO } from "../../assets";
import PrimaryBtn from "../../components/PrimaryBtn";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../constants/color";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground
        source={INTIAL_BACKGROUND}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,1)"]}
          style={styles.overlay}
        >
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>It's Time To Transform</Text>
        <View style={styles.footer}>
          <PrimaryBtn
            title="Get Started"
            color={Colors.ORANGE}
            onPress={() => navigation.navigate("SignupScreen")}
            disabled={false}
          />
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.loginText}>or Login</Text>
          </Pressable>
        </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
