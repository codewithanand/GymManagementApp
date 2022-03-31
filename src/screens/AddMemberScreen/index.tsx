import { ScrollView, Text, TextInput, View } from "react-native";
import React, { FC, useMemo, useState } from "react";
import createStyles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TopNavigation from "../../components/TopNavigation";
import { BACK_ICON, DONE_ICON, PROFILE_PIC } from "../../assets";
import ProfilePicture from "../../components/ProfilePicture";
import { Colors } from "../../constants/color";
import { RadioButton } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import Textarea from "react-native-textarea";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddMemberScreen: FC<IProps> = ({ navigation }) => {
  const styles = useMemo(() => createStyles(), []);

  const [checked, setChecked] = React.useState("first");

  const [pvalue, setPvalue] = useState("Select Plan");
  const plans = [
    { label: "Plan 1", value: "1" },
    { label: "Plan 2", value: "2" },
    { label: "Plan 3", value: "3" },
  ];

  const [gender, setGender] = useState("male");

  const [bvalue, setBvalue] = useState("Select Batch");
  const batch = [
    { label: "Batch 1", value: "Batch 1" },
    { label: "Batch 2", value: "Batch 2" },
    { label: "Batch 3", value: "Batch 3" },
  ];
  return (
    <View style={styles.body}>
      <TopNavigation
        firstIcon={BACK_ICON}
        secondIcon={DONE_ICON}
        navigation={navigation}
        firstAction={() => navigation.navigate("MembersScreen")}
        secondAction={() => console.log("New member successfully added")}
      />
      <ScrollView>
        <View style={styles.section}>
          <ProfilePicture
            src={PROFILE_PIC}
            width={150}
            style={{ margin: 10, alignSelf: "center" }}
          />
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
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>General Training</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Personal Training</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="ID"
            value={"Auto ID"}
            keyboardType="numeric"
            placeholderTextColor={Colors.GREY}
          />
          <Dropdown
            data={batch}
            labelField="label"
            valueField="value"
            placeholder={bvalue}
            value={bvalue}
            onChange={(item) => {
              setBvalue(item.value);
            }}
            style={styles.dropdown}
          />
        </View>
        <View style={styles.section}>
          <Text>Plan Details:</Text>
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
          <Text>Plan Amount: {0}</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Joining date"
            placeholderTextColor={Colors.GREY}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Paid Amount"
            placeholderTextColor={Colors.GREY}
          />
          <Text>Due Amount: {0}</Text>
        </View>
        <View style={styles.section}>
          <RadioButton
            value="male"
            status={gender === "male" ? "checked" : "unchecked"}
            onPress={() => setGender("male")}
          />
          <Text>Male</Text>
          <RadioButton
            value="female"
            status={gender === "female" ? "checked" : "unchecked"}
            onPress={() => setGender("female")}
          />
          <Text>Female</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Email"
            placeholderTextColor={Colors.GREY}
          />
          <TextInput
            style={styles.input}
            onChangeText={() => {}}
            placeholder="Date of Birth"
            placeholderTextColor={Colors.GREY}
          />
          <Textarea
            containerStyle={styles.textarea}
            style={{ height: 60, padding: 5 }}
            onChangeText={() => {}}
            maxLength={120}
            placeholder={"Address"}
            placeholderTextColor={Colors.LIGHT_GREY}
            underlineColorAndroid={"transparent"}
          />
          <Textarea
            containerStyle={styles.textarea}
            style={{ height: 60, padding: 5 }}
            onChangeText={() => {}}
            maxLength={120}
            placeholder={"Any comment or notes eg. any medical info"}
            placeholderTextColor={Colors.LIGHT_GREY}
            underlineColorAndroid={"transparent"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddMemberScreen;
