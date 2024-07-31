import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { About_Icon, Back_Icon, BackBlack_Icon, ChangeMpin_Icon, FingerScan_Icon, Logout_Icon, Member_Icon, Person_Icon, Phone_Icon, StatusUp_Icon } from '../../../res/icons'
import { height, width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import ScreenConstants from '../../../Navigators/ScreenConstants'
//import ScreenConstants from '../../../Navigators/ScreenConstants'

const ProfileScreen = () => {

  const navigation = useNavigation();

  const DummyData = [
    { id: 1, icon: Member_Icon, title: "Profile", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_PROFILE_SCREEN)}},
    { id: 2, icon: ChangeMpin_Icon, title: "Change MPIN", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_MPIN_SCREEN)}},
    { id: 3, icon: StatusUp_Icon, title: "EMI Due Report ", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_LOCATION_SCREEN)}},
    { id: 4, icon: StatusUp_Icon, title: "Location Upload ", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_LOCATION_VIEW_SCREEN)}},
    { id: 5, icon: StatusUp_Icon, title: "Location View ", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_PROFILE_SCREEN)}},
    { id: 6, icon: FingerScan_Icon, title: "Biometric Setting", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_PROFILE_SCREEN)} },
    { id: 7, icon: Phone_Icon, title: "Contact Us", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_PROFILE_SCREEN)} },
    { id: 8, icon: About_Icon, title: "About VL Bank", actionNavigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_PROFILE_SCREEN)} },
    // {id: 6, icon: Logout_Icon, title: "Logout"},
  ]
  const Data = ({ item, props }) => {
    return (
      <Pressable onPress={() => { item?.actionNavigation() }} style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, }}>
        <View style={{ flexDirection: "row", alignItems: "center", }}>
          <item.icon height={height / 20} width={width / 14} />
          <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black, marginHorizontal: 20, }}>{item.title}</Text>
        </View>
        <BackBlack_Icon height={height / 12} width={width / 12} />
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Person_Icon height={height / 5} width={width / 4} />
        <Text style={{ fontSize: 16, fontFamily: fonts.PoppinsSemiBold, color: colors?.black }}>Pratik Jadhav</Text>
      </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black, padding: "3%" }}>Settings</Text>
        <FlatList
          data={DummyData}
          style={styles.flatlistStyles}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: width/50, paddingBottom:width/20 }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center", width: '85%', }}>
              <Logout_Icon height={height / 20} width={width / 14} />
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:"red", marginHorizontal: 25, }}>Logout</Text>
            </Pressable>
          </View>
          }
          renderItem={({ item }) => {
            return (
              <Data item={item} />
            )
          }
          }
        />
     
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackColor,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    //padding: "2%"
  },
  header: {
    // width: width * 0.95,
    // height: height / 2,
    backgroundColor: colors?.white,
    borderRadius: 20,
    // alignSelf: "center",
    margin:"2%"
  },
  flatlistStyles: {
    //marginTop: width / 60,
    // paddingBottom: width / 3,
    paddingHorizontal: width / 30,
    marginBottom: height/3.5

  },
});