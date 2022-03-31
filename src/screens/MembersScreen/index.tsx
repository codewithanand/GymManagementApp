import { ScrollView, TextInput, View } from "react-native";
import React, { FC, useMemo, useState } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import BottomNavigation from "../../components/BottomNavigation";
import TopNavigation from "../../components/TopNavigation";
import { ADD_PEOPLE_ICON, MENU_ICON } from "../../assets";
import MemberCard from "../../components/MemberCard";
import { Colors } from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const MembersScreen: FC<IProps> = ({ navigation }) => {

  const styles = useMemo(() => createStyles(), []);

  const [pvalue, setPvalue] = useState('Select plan type');
  const [tvalue, setTvalue] = useState('Select training type');
  const [bvalue, setBvalue] = useState('Select batch type');

  const plans = [
    { label: "Plan 1", value: "1" },
    { label: "Plan 2", value: "2" },
    { label: "Plan 3", value: "3" },
  ];
  const training = [
    { label: "Training 1", value: "1" },
    { label: "Training 2", value: "2" },
    { label: "Training 3", value: "3" },
  ];
  const batch = [
    { label: "Batch 1", value: "1" },
    { label: "Batch 2", value: "2" },
    { label: "Batch 3", value: "3" },
  ];

  return (
    <View style={styles.body}>
      <TopNavigation
        firstIcon={MENU_ICON}
        secondIcon={ADD_PEOPLE_ICON}
        navigation={navigation}
        firstAction={() => navigation.navigate('NavigationScreen')}
        secondAction={() => navigation.navigate('AddMemberScreen')}
      />
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Name / Mobile"
          placeholderTextColor={Colors.GREY}
        />
      </View>
      <View style={styles.categoryBox}>
        <Dropdown
          data={plans}
          labelField="label"
          valueField="value"
          placeholder={pvalue.length > 10 ? pvalue.slice(0, 11)+'...' : pvalue}
          value={pvalue}
          onChange={item => {
            setPvalue(item.value);
          }}
          style={styles.dropdown}
        />
        <Dropdown
          data={training}
          labelField="label"
          valueField="value"
          placeholder={tvalue.length > 10 ? tvalue.slice(0, 11)+'...' : tvalue}
          value={tvalue}
          onChange={item => {
            setTvalue(item.value);
          }}
          style={styles.dropdown}
        />
        <Dropdown
          data={batch}
          labelField="label"
          valueField="value"
          placeholder={bvalue.length > 10 ? bvalue.slice(0, 11)+'...' : bvalue}
          value={bvalue}
          onChange={item => {
            setBvalue(item.value);
          }}
          style={styles.dropdown}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </ScrollView>
      <BottomNavigation navigationLoc={navigation} />
    </View>
  );
};

export default MembersScreen;
