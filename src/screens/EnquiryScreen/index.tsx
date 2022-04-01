import { ScrollView, Text, TextInput, View } from "react-native";
import React, { FC, useMemo, useState } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import BottomNavigation from "../../components/BottomNavigation";
import TopNavigation from "../../components/TopNavigation";
import { ADD_ICON, ADD_PEOPLE_ICON, MENU_ICON } from "../../assets";
import { Colors } from "../../constants/color";
import { Dropdown } from "react-native-element-dropdown";
import { RFValue } from "react-native-responsive-fontsize";
import PrimaryBtn from "../../components/PrimaryBtn";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const EnquiryScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [status, setStatus] = useState("Filter");

  const enquiry = [
    { label: "All Status", value: "1" },
    { label: "Payment issue", value: "2" },
    { label: "Closed", value: "3" },
  ];

  return (
    <View style={styles.body}>
      <TopNavigation
        firstIcon={MENU_ICON}
        secondIcon={ADD_ICON}
        navigation={navigation}
        firstAction={() => navigation.navigate("NavigationScreen")}
        secondAction={() => navigation.navigate("AddEnquiryScreen")}
      />

      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          onChangeText={() => {}}
          placeholder="Name / Mobile"
          placeholderTextColor={Colors.GREY}
        />
      </View>
      <Dropdown
        data={enquiry}
        labelField="label"
        valueField="value"
        placeholder={status}
        placeholderStyle={{ color: Colors.WHITE }}
        iconColor={Colors.WHITE}
        activeColor={Colors.WHITE}
        value={status}
        onChange={(item) => {
          setStatus(item.value);
        }}
        style={styles.dropdown}
      />

      <ScrollView style={styles.scrollView}>
        <View style={{paddingBottom: 20, paddingTop: 20,}}>
          <Text
            style={[styles.text, { fontWeight: "bold", fontSize: RFValue(25) }]}
          >
            No Enquiry found
          </Text>
          <Text
            style={[styles.text, { fontWeight: "500", fontSize: RFValue(20) }]}
          >
            Start Adding Enquiry
          </Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: RFValue(20), marginBottom: 20 },
            ]}
          >
            (Click + on top right corner)
          </Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "300", fontSize: RFValue(16), marginBottom: 20 },
            ]}
          >
            OR
          </Text>
          <PrimaryBtn
            color={Colors.PRIMARY}
            title="ADD ENQUIRY"
            onPress={() => navigation.navigate('AddEnquiryScreen')}
          />
        </View>
      </ScrollView>
      <BottomNavigation navigationLoc={navigation} />
    </View>
  );
};

export default EnquiryScreen;
