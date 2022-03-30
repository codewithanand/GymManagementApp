import { Pressable, ScrollView, Text, View } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BottomNavigation from "../../components/BottomNavigation";
import TopNavigation from "../../components/TopNavigation";
import { MENU_ICON } from "../../assets";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DashboardScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <TopNavigation firstIcon={MENU_ICON} navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.dashboardCard}>
          <Text style={styles.heading}>Members Upcomming Expiry Report</Text>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Expiry in next (1-3) days: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Expiry in next (4-7) days: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Expiry in next (7-15) days: 0</Text>
          </Pressable>
        </View>
        <View style={styles.dashboardCard}>
          <Text style={styles.heading}>Today's Report</Text>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Today Birthday: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Membership Expiry Today: 0</Text>
          </Pressable>
        </View>
        <View style={styles.dashboardCard}>
          <Text style={styles.heading}>Member Registration Report</Text>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Total Members: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Active Members: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Expired Members: 0</Text>
          </Pressable>
          <Pressable style={styles.dashboardButtons} onPress={() => {console.log('clicked')}}>
            <Text>Block Members: 0</Text>
          </Pressable>
        </View>
      </ScrollView>
      <BottomNavigation navigationLoc={navigation} />
    </View>
  );
};

export default DashboardScreen;
