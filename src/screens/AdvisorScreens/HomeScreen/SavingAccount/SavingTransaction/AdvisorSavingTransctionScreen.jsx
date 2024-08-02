import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../../res/color'
import { width } from '../../../../../res/string'
import CustomTextInput from '../../../../../component/CustomTextInput'
import CustomButton from '../../../../../component/CustomButton'
import { useNavigation } from '@react-navigation/native'
import ScreenConstants from '../../../../../Navigators/ScreenConstants'

const AdvisorSavingTransctionScreen = () => {

  const navigation = useNavigation();
  const [branchCode, setBranchCode] = useState("");
  const [branchName, setBranchName] = useState("");
  const [memberCode, setMemberCode] = useState("");

  const BranchCode = {
    title: 'Branch Code',
    // palceHolderText: 'Select Loan ID',
    // FirstIcon: Lock_Icon,
    // SecondIcon: PassEye_Icon,
    inputValue: branchCode,
    actionSecond: () => setBranchCode(!branchCode),
    isId: branchCode,
  }
  const BranchName = {
    title: 'Branch Name',
    // palceHolderText: 'Select Loan ID',
    // FirstIcon: Lock_Icon,
    // SecondIcon: PassEye_Icon,
    inputValue: branchName,
    actionSecond: () => setBranchName(Number),
    isId: branchName,
  }
  const MemberCode = {
    title: 'Member Code',
    // palceHolderText: 'Select Loan ID',
    // FirstIcon: Lock_Icon,
    // SecondIcon: PassEye_Icon,
    inputValue: memberCode,
    actionSecond: () => setMemberCode(Number),
    isId: memberCode,
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
       <CustomTextInput inputData={BranchCode}/>       
       <CustomTextInput inputData={BranchName}/>
       <Text>Select Account Number</Text>       
       <CustomTextInput inputData={MemberCode}/> 
       <CustomButton buttonTitle={"Search"} onPress={()=>{navigation.navigate(ScreenConstants?.ADVISOR_SAVING_HISTORY_SCREEN)}}/>      
      </View>
    </View>
  )
}

export default AdvisorSavingTransctionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    borderRadius: 12,
    backgroundColor: colors?.white,
    margin: "2%",
    paddingVertical: width/25,
    paddingHorizontal: width/20,
  },
});