import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import CustomTextInput from '../../../../../component/CustomTextInput'
import { height, width } from '../../../../../res/string'
import { Download_Icon, Formto_Icon } from '../../../../../res/icons'
import CustomButton from '../../../../../component/CustomButton'

const AdvisorSavingStatementScreen = () => {
  const [accNumber, setAccNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [holderName, setHolderName] = useState('');

  const accNumberData = {
    title: 'A/C Number',
    palceHolderText: 'Enter your member name',
    inputValue: accNumber,
    changedText: (text) => setAccNumber(text),
  };
  const accountNumberData = {
    title: 'Account Number',
    palceHolderText: 'Enter your policy no',
    inputValue: accountNumber,
    changedText: (text) => setAccountNumber(text),
  };
  const holderNameData = {
    title: 'Account Holder Name',
    palceHolderText: 'Enter your policy no',
    inputValue: holderName,
    changedText: (text) => setHolderName(text),
  };


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Statement</Text>
        <View>
          <CustomTextInput inputData={accNumberData} />
          <CustomTextInput inputData={accountNumberData} />
          <CustomTextInput inputData={holderNameData} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Form</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View style={{ marginTop: width / 15, alignItems: 'center', alignSelf: 'center' }} >
            <Formto_Icon height={width / 16} width={width / 16} />
          </View>
          <View>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>To</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
        </View>
      </View>
      <View style={{ margin: "2%" }}>
        <CustomButton buttonTitle={"Show"} />
      </View>
      <View style={{ position:"absolute", bottom:width/50, right:width /50 }}>
        <Download_Icon height={height / 12} width={width / 6} />
      </View>
    </View>
  )
}

export default AdvisorSavingStatementScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor
  },
  content: {
    backgroundColor: colors?.white,
    margin: "2%",
    borderRadius: 12,
    padding: "4%"
  },
  input: {
    width: width * 0.4,
    borderRadius: 10,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  }
});