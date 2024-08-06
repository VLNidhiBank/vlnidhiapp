import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import { height, width } from '../../../../../res/string'
import fonts from '../../../../../res/fonts'
import CustomButton from '../../../../../component/CustomButton'

const AddBeneficiaryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Add Beneficiary</Text>
        <ScrollView>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder=''
              keyboardType='numeric'
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Bank Name</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>A/C No.</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Confirm A/C No.</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>IFSC</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>UPI Id</Text>
            <TextInput
              style={styles.input}
              placeholder=''
            />
          </View>
        </ScrollView>
      </View>
      <View style={{ padding: "3%" }}>
        <CustomButton buttonTitle={"Save"} />
      </View>
    </View>
  )
}

export default AddBeneficiaryScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors?.screenBackColor,
    },
    content: {
      flex: 1,
      margin:"2%",
      // width: width * 0.95,
      // height: height/1.5,
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