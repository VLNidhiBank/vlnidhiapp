import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import { height, width } from '../../../../../res/string'
import fonts from '../../../../../res/fonts'
import CustomButton from '../../../../../component/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const LoanCalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <Text style={{fontSize:18, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black}}>Loan Calculator</Text>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>ROI Type</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>EMI Collection</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>ROI(%p.a.)</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Loan Amount</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Term</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>EMI</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
      </View>
      <View style={{ paddingHorizontal:width/35}}>
      <CustomButton buttonTitle={"Calculate"}/>
      </View>
      <View style={{width:width*0.95,height:height/15,borderRadius:10,borderColor:colors?.primaryColor, borderWidth:1, alignSelf:"center",paddingHorizontal:width/20,alignItems:"center",paddingVertical:width/30}}>
        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsSemiBold, color:colors?.primaryColor}}>View Amortization</Text>
      </View>
      <View style={{marginTop:"5%"}}>
      </View>
      </ScrollView>
    </View>
  )
}

export default LoanCalculatorScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin:"2%",
    // width: width * 0.95,
    borderRadius: 10,
    backgroundColor: colors?.white,
    // alignSelf: "center",
    marginTop: "4%",
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
  },
  input: {
    width: width * 0.85,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 12,
  },
});