import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  CollectionScreen,
  DashboardScreen,
  EnquiryScreen,
  IntialScreen,
  LoginScreen,
  MembersScreen,
  SignupScreen,
  UserScreen,
} from "../screens";

export type MainStackParamList = {
  IntialScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  UserScreen: undefined;
  MembersScreen: undefined;
  DashboardScreen: undefined;
  CollectionScreen: undefined;
  EnquiryScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="IntialScreen"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="IntialScreen" component={IntialScreen} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} />
        <MainStack.Screen name="SignupScreen" component={SignupScreen} />
        <MainStack.Screen name="UserScreen" component={UserScreen} />
        <MainStack.Screen name="MembersScreen" component={MembersScreen} />
        <MainStack.Screen name="DashboardScreen" component={DashboardScreen} />
        <MainStack.Screen name="CollectionScreen" component={CollectionScreen} />
        <MainStack.Screen name="EnquiryScreen" component={EnquiryScreen} />

      </MainStack.Navigator>
    </NavigationContainer>
  );
}
