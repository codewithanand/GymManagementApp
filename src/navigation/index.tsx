import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { IntialScreen, LoginScreen, SignupScreen, UserScreen } from "../screens";

export type MainStackParamList = {
  IntialScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  UserScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
      initialRouteName="UserScreen"
        screenOptions={{ headerShown: false, }}
      >
          <MainStack.Screen name="IntialScreen" component={IntialScreen} />
          <MainStack.Screen name="LoginScreen" component={LoginScreen} />
          <MainStack.Screen name="SignupScreen" component={SignupScreen} />
          <MainStack.Screen name="UserScreen" component={UserScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
