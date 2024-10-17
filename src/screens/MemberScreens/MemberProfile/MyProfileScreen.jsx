import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../../res/color'
import { width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { memberDetails } from '../../../stores/MemberAPI/memberData/memberDataSlice'

const MyProfileScreen = () => {

  const dispatch = useDispatch();
  const memberData = useSelector(state => state.memberDataSlice.memberData);
  const loginData = useSelector(state => state.loginSlice.loginData);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(memberDetails(loginData.username))
  }, [dispatch])

  const memberDataArray = Array.isArray(memberData) ? memberData : [memberData];


  const Data = ({ item }) => {
    console.log(item, "Item inside flatList")
    return (
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Full Name:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.fullName}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Code:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.code}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Address:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.address}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Mobile:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.mobile}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Branch Name:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.branchName}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Date of Join:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.dateOfJoin}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Date of Birth:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.dateOfBirth}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Age:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.Age}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>PAN:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.PAN}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Nominee Name:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.nomineeName}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: width / 50, }}>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Nominee Age:</Text>
          <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular, }}>{item.nomineeAge}</Text>
        </View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={memberDataArray}
          renderItem={({ item }) => <Data item={item} />}
        />
      </View>
    </View>
  )
}

export default MyProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin: "2%",
    borderRadius: 20,
    backgroundColor: colors?.white,
    marginTop: "4%",
    paddingHorizontal: width / 15,
    paddingVertical: width / 30,
  },
});