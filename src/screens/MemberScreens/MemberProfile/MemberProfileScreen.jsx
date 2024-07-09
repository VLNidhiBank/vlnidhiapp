import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { Back_Icon, BackBlack_Icon, Member_Icon, Person_Icon } from '../../../res/icons'
import { height, width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'

const MemberProfileScreen = () => {

  const DummyData = [
    {id: 1, icon: Member_Icon, title: "Profile"},
    {id: 2, icon: Member_Icon, title: "Change MPIN"},
    {id: 3, icon: Member_Icon, title: "Biometric Setting"},
    {id: 4, icon: Member_Icon, title: "Contact Us"},
    {id: 5, icon: Member_Icon, title: "About VL Bank"},
    {id: 6, icon: Member_Icon, title: "Logout"},
  ]
  const Data = ({ item }) =>{
    return(
      <View style={{ flexDirection: "row", justifyContent: "space-between",paddingHorizontal: 10, }}>
          <View style={{ flexDirection: "row", alignItems: "center", width: '85%', }}>
            <item.icon height={height / 20} width={width / 14} />
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black, marginHorizontal: 20,  }}>{item.title}</Text>
          </View>
          <BackBlack_Icon height={height / 12} width={width / 12} />
        </View>
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
          renderItem={({ item }) => {
            return(
              <Data item={item}/>
            )
          }
        } 
        />
      </View>
    </View>
  )
}

export default MemberProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackColor,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: "2%"
  },
  header: {
    width: width * 0.95,
    // height: height / 2,
    backgroundColor: colors?.white,
    borderRadius: 10,
    alignSelf: "center"
  },
  flatlistStyles: {
    // backgroundColor: 'red',
    marginTop: width / 60,
    paddingBottom: width / 3,
    paddingHorizontal: width / 30,

  },
});