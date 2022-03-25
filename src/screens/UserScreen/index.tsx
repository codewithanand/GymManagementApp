import { Pressable, ScrollView, Text, View } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TopNavigation from "../../components/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation";
import ProfilePicture from "../../components/ProfilePicture";
import {
  GET_APP_ICON,
  GRID_ICON,
  HELP_ICON,
  PHONE_ICON,
  PRIVACY_ICON,
  PROFILE_PIC,
  QUESTION_ICON,
  SERVICES_ICON,
  SUBSCRIPTION_ICON,
} from "../../assets";
import ListBtn from "../../components/ListBtn";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const UserScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <TopNavigation />

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <ProfilePicture src={PROFILE_PIC} width={100} />
          <Text style={styles.gymName}>Muscle & Fitness</Text>
          <Text style={styles.gymOwner}>Amit Kumar</Text>
          <Text style={styles.gymContact}>6361104481</Text>
          <Text style={styles.gymEmail}>amit235098@gmail.com</Text>
        </View>

        <ListBtn iconName={GRID_ICON} btnName="Plans" countItem={8} />
        <ListBtn iconName={SERVICES_ICON} btnName="Services" countItem={1} />
        <ListBtn iconName={GET_APP_ICON} btnName="Members Download" />
        <ListBtn iconName={SUBSCRIPTION_ICON} btnName="Gym Subscription" />
        <ListBtn
          iconName={QUESTION_ICON}
          btnName="Request An Feature/ Report an issue"
        />
        <ListBtn iconName={PHONE_ICON} btnName="Contact Us" />
        <ListBtn iconName={HELP_ICON} btnName="How to use GymManage?" />
        <ListBtn iconName={PRIVACY_ICON} btnName="Privacy Policy" />
      </ScrollView>

      <BottomNavigation navigationLoc = {navigation} />
    </View>
  );
};

export default UserScreen;
