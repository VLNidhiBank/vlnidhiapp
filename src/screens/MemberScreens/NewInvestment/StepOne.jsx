import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { height, width } from '../../../res/string'
import { colors } from '../../../res/color'
import fonts from '../../../res/fonts'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Drop_Icon } from '../../../res/icons'

const StepOne = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Member Details</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.label}>Policy Date</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Member Code</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Member Name</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Relative Details</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.rowContent}>
          <View style={styles.halfContent}>
            <Text style={styles.label}>DOB</Text>
            <TextInput style={styles.input1} placeholder='' keyboardType='numeric'/>
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.label}>Age</Text>
            <TextInput style={styles.input1} placeholder='' keyboardType='numeric' />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Mode of Operation</Text>
          <TextInput style={styles.input} placeholder='' />
          {/* <Drop_Icon height={height / 20} width={width / 14}/> */}
        </View>
      </ScrollView>
    </View>
  )
}

export default StepOne

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    height: height / 2,
    backgroundColor: colors?.white,
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: width / 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsSemiBold,
    color: colors?.black,
    paddingHorizontal: width / 20,
    marginBottom: width / 20,
  },
  scrollContent: {
    paddingBottom: width / 10,
  },
  content: {
    paddingVertical: width / 25,
    paddingHorizontal: width / 20,
  },
  rowContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
  },
  halfContent: {
    width: width * 0.4,
    marginHorizontal: width / 40,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: width / 20,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
  },
  input1: {
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: width / 20,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
  },
});
