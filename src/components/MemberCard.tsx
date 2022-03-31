import { useMemo } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BLOCK_ICON, CALL_ICON, FINGERPRINT_ICON, GRID_ICON, ID_ICON, MESSAGE_ICON, PROFILE_PIC, WHATSAPP_ICON } from "../assets";
import { Colors } from "../constants/color";
import NamedIconBtn from "./NamedIconBtn";
import ProfilePicture from "./ProfilePicture";

const MemberCard = () => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
        <ProfilePicture src={PROFILE_PIC} width={70} />
        <Button title="Delete" color={Colors.RED} onPress={() => {}} />
      </View>
      <View style={{ flex: 1, marginLeft: RFValue(10),  }}>
        <View style={styles.details}>
          <View>
            <Text style={styles.textHeading}>Name:</Text>
            <Text style={styles.text}>Manas Kanaujia</Text>
          </View>
          <View>
            <Text style={styles.textHeading}>Member ID:</Text>
            <Text style={styles.text}>MF20221990</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.textHeading}>Mobile:</Text>
            <Text style={styles.text}>7004107447</Text>
          </View>
        </View>
        <View style={[styles.details, {marginBottom: RFValue(10)}]}>
          <View>
            <Text style={styles.textHeading}>Plan Expiry:</Text>
            <Text style={styles.text}>25 Jun 2022</Text>
          </View>
          <View>
            <Text style={styles.textHeading}>Due Amount:</Text>
            <Text style={styles.text}>3000</Text>
          </View>
        </View>
        <ScrollView horizontal>
            <NamedIconBtn iconName={ID_ICON} title="ID CARD" width={24} />
            <NamedIconBtn iconName={CALL_ICON} title="CALL" width={24} />
            <NamedIconBtn iconName={MESSAGE_ICON} title="WHATSAPP" width={24} />
            <NamedIconBtn iconName={MESSAGE_ICON} title="MESSAGE" width={24} />
            <NamedIconBtn iconName={FINGERPRINT_ICON} title="ATTENDANCE" width={24} />
            <NamedIconBtn iconName={GRID_ICON} title="RENEW PLAN" width={24} />
            <NamedIconBtn iconName={BLOCK_ICON} title="BLOCK" width={24} />
        </ScrollView>
      </View>
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    body: {
      padding: RFValue(10),
      marginBottom: RFValue(5),
      marginTop: RFValue(5),
      flexDirection: "row",
      justifyContent: "space-between",
      borderLeftWidth: RFValue(20),
      borderLeftColor: Colors.GREY,
      backgroundColor: Colors.WHITE,
    },
    textHeading: {
      fontSize: RFValue(12),
      color: Colors.PRIMARY,
    },
    text: {
      fontSize: RFValue(14),
      color: Colors.BLACK,
    },
    details: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: RFValue(4),
    },
  });

export default MemberCard;
