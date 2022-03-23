import { ScrollView, Text, View } from "react-native";
import React, { FC, useMemo } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { BELL_ICON, MENU_ICON } from "../../assets";
import IconBtn from "../../components/IconBtn";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const UserScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  return (
    <View style={styles.body}>
      <View style={styles.navbar}>
        <IconBtn iconName={MENU_ICON} width={24} />
        <IconBtn iconName={BELL_ICON} width={24} disabled={true} />
      </View>

      <ScrollView style={styles.scrollView}>
          
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text>This is Bottom Navigation Pane</Text>
      </View>
    </View>
  );
};

export default UserScreen;
