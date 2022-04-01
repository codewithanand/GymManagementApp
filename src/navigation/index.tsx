import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  AddEnquiryScreen,
  AddMemberScreen,
  CollectionScreen,
  DashboardScreen,
  DatabaseScreen,
  EnquiryScreen,
  IntialScreen,
  LoginScreen,
  MembersScreen,
  NavigationScreen,
  ScannerScreen,
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
  NavigationScreen: undefined;
  ScannerScreen: undefined;
  DatabaseScreen: undefined;
  AddMemberScreen: undefined;
  AddEnquiryScreen :undefined;
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
        <MainStack.Screen name="NavigationScreen" component={NavigationScreen} />
        <MainStack.Screen name="ScannerScreen" component={ScannerScreen} />
        <MainStack.Screen name="DatabaseScreen" component={DatabaseScreen} />
        <MainStack.Screen name="AddMemberScreen" component={AddMemberScreen} />
        <MainStack.Screen name="AddEnquiryScreen" component={AddEnquiryScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
