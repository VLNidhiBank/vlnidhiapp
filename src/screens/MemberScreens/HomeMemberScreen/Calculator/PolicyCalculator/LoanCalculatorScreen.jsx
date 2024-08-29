import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../../../../../res/color';
import { width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';
import CustomButton from '../../../../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import ScreenConstants from '../../../../../Navigators/ScreenConstants';

const inputFields = [
  { label: 'ROI Type', placeholder: '' },
  { label: 'EMI Collection', placeholder: '' },
  { label: 'ROI(%p.a.)', placeholder: '' },
  { label: 'Loan Amount', placeholder: '' },
  { label: 'Term', placeholder: '' },
  { label: 'EMI', placeholder: '' }
];

const LoanCalculatorScreen = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Policy Calculator</Text>
          
          {inputFields.map((field, index) => (
            <View style={styles.calculator} key={index}>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>
                {field.label}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  field.width ? { width: field.width } : null,
                  { marginTop: field.width ? "0" : "3%" }
                ]}
                placeholder={field.placeholder}
              />
            </View>
          ))}

          <View style={{ padding: "3%" }}>
            <CustomButton buttonTitle={"Calculate"} />
            <CustomButton buttonTitle={"View Amortization"} onPress={() =>{
              navigation.navigate(ScreenConstants.AMORTIZATION_SCREEN)
            }}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default LoanCalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin: "2%",
    backgroundColor: colors?.white,
    borderRadius: 12,
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
    marginTop: "4%"
  },
  input: {
    width: width * 0.85,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 12,
  },
  calculator: {
    marginTop: "3%",
  },
});
