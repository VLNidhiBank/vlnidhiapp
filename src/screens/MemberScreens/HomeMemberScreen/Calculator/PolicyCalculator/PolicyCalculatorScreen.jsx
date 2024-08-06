import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import { width } from '../../../../../res/string'
import fonts from '../../../../../res/fonts'
import CustomButton from '../../../../../component/CustomButton'

const PolicyCalculator = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Policy Calculator</Text>

          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Scheme Type</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Scheme Name</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:"3%"}}>
            <View>
              <Text style={{fontSize: 14, fontFamily:fonts?.PoppinsRegular, color:colors?.black}}>Term</Text>
              <TextInput
                style={{width: width*0.4, backgroundColor:"rgba(128, 128, 128, 0.2)", borderRadius:12}}
                placeholder=''
              />
            </View>
            <View>
              <Text style={{fontSize: 14, fontFamily:fonts?.PoppinsRegular, color:colors?.black}}>Mode</Text>
              <TextInput
                style={{width: width*0.4, backgroundColor:"rgba(128, 128, 128, 0.2)", borderRadius:12}}
                placeholder=''
              />
            </View>
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Deposit Amount</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Maturity Amount</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>MIS Interest</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          
      </View>
      <View style={{ padding: "3%" }}>
        <CustomButton buttonTitle={"Calculate"} />
      </View>
      </ScrollView>
    </View>
  )
}

export default PolicyCalculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin:"2%",
    // width: width * 0.95,
    backgroundColor: colors?.white,
    borderRadius: 12,
    // alignSelf: "center",
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
    marginTop: "4%"
  },
  input: {
    width: width * 0.85,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 12,
  },
});