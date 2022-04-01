import { ScrollView, Text, TextInput, View } from "react-native";
import React, { FC, useMemo, useState } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TopNavigation from "../../components/TopNavigation";
import { BACK_ICON, DONE_ICON, PROFILE_PIC } from "../../assets";
import { Colors } from "../../constants/color";
import { Dropdown } from "react-native-element-dropdown";
import Textarea from "react-native-textarea";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddEnquiryScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [pvalue, setPvalue] = useState("Select Plan");
  const plans = [
    { label: "Plan 1", value: "1" },
    { label: "Plan 2", value: "2" },
    { label: "Plan 3", value: "3" },
  ];

  const [status, setStatus] = useState("Intial Discussion");
  const category = [
    { label: "Initial Discussion", value: "1" },
    { label: "Payment Isuue", value: "2" },
    { label: "Closed", value: "3" },
  ];
  return (
    <View style={styles.body}>
      <TopNavigation
        firstIcon={BACK_ICON}
        secondIcon={DONE_ICON}
        navigation={navigation}
        firstAction={() => navigation.navigate("EnquiryScreen")}
        secondAction={() => console.log("New enquiry successfully added")}
      />
      <ScrollView>
        <View style={styles.section}>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Name"
            placeholderTextColor={Colors.GREY}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Mobile Number"
            keyboardType="numeric"
            placeholderTextColor={Colors.GREY}
          />
        </View>
        <View style={styles.section}>
          <Text style={[styles.text, { marginBottom: 10, marginTop: 10 }]}>
            Plan Enquiry:
          </Text>
          <Dropdown
            data={plans}
            labelField="label"
            valueField="value"
            placeholder={pvalue}
            value={pvalue}
            onChange={(item) => {
              setPvalue(item.value);
            }}
            style={styles.dropdown}
          />
          <Dropdown
            data={category}
            labelField="label"
            valueField="value"
            placeholder={status}
            value={status}
            onChange={(item) => {
              setStatus(item.value);
            }}
            style={styles.dropdown}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Follow up Date"
            placeholderTextColor={Colors.GREY}
          />
          <Textarea
            containerStyle={styles.textarea}
            style={{ height: 60, padding: 5 }}
            onChangeText={() => {}}
            maxLength={120}
            placeholder={"Member discussion"}
            placeholderTextColor={Colors.LIGHT_GREY}
            underlineColorAndroid={"transparent"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddEnquiryScreen;
