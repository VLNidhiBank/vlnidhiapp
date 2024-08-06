import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../../res/color'
import { width } from '../../../../../res/string'
import fonts from '../../../../../res/fonts'
import CustomTextInput from '../../../../../component/CustomTextInput'
import CustomButton from '../../../../../component/CustomButton'

const MiniStatementScreen = () => {
  const [ accountNo, setAccountNo ] = useState("");

  const AccountNo = {
    title: 'Select Account Number',
    // palceHolderText: 'Latitude',
    // FirstIcon: Lock_Icon,
    // SecondIcon: PassEye_Icon,
    inputValue: accountNo,
    actionSecond: () => setAccountNo(!accountNo),
    isAccountNo: accountNo,
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize: 18, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>Mini Statement</Text>
        <View>
          <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular, color:colors?.black}}>Select Account Number</Text>
          <CustomTextInput inputData={ AccountNo }/>
        </View>
        <CustomButton buttonTitle={"Show"}/>
      </View>
    </View>
  )
}

export default MiniStatementScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    borderRadius: 10,
    backgroundColor: colors?.white,
    margin: "2%",
    paddingVertical: width / 25,
    paddingHorizontal: width / 20,
  }
});