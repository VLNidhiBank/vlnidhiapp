import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../../../res/color';
import fonts from '../../../../../res/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { impsBeneficiary, memberBeneficiaryList } from '../../../../../stores/addBeneficiaryStores/addBeneficiarySlice';
import { height, width } from '../../../../../res/string';
import CustomTextInput from '../../../../../component/CustomTextInput';
import CustomButton from '../../../../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../../../../../component/Common/CustomSelect';

// Define validation schema with Yup
const validationSchema = Yup.object().shape({
  beneficiaryId: Yup.string().required('Beneficiary ID is required'),
  beneficiaryName: Yup.string().required('Beneficiary Name is required'),
  beneficiaryEmail: Yup.string().email('Invalid email format').required('Beneficiary Email is required'),
  beneficiaryPhone: Yup.string().matches(/^[0-9]+$/, 'Phone number must be numeric').required('Beneficiary Phone is required'),
  beneficiaryBankName: Yup.string().required('Beneficiary Bank Name is required'),
  beneficiaryAccountNumber: Yup.string().matches(/^[0-9]+$/, 'Account number must be numeric').required('Beneficiary Account Number is required'),
  beneficiaryIfsc: Yup.string().required('Beneficiary IFSC is required'),
  beneficiaryUpiId: Yup.string().required('Beneficiary UPI ID is required'),
  beneficiaryTransferMode: Yup.string().required('Beneficiary Transfer Mode is required'),
  savingsAccountNumber: Yup.string().matches(/^[0-9]+$/, 'Account number must be numeric').required('Account Number is required'),
  savingsAmount: Yup.number().positive('Amount must be positive').required('Amount is required'),
  savingsBalance: Yup.number().positive('Balance must be positive').required('Balance is required'),
  savingsRemarks: Yup.string().optional(),
});

const ImpsTransferScreen = () => {
  const List = useSelector(state => state.addBeneficiarySlice.memberBeneficiaryListData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isManualInput, setIsManualInput] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);  // State to handle success message

  useEffect(() => {
    dispatch(memberBeneficiaryList());
  }, [dispatch]);

  const handleSelectChange = (value, setFieldValue) => {
    if (value) {
      const selectedData = List.find(item => item.name === value);
      if (selectedData) {
        setIsManualInput(false);
        setFieldValue('beneficiaryId', selectedData.id.toString());
        setFieldValue('beneficiaryName', selectedData.name);
        setFieldValue('beneficiaryBankName', selectedData.bankName);
        setFieldValue('beneficiaryAccountNumber', selectedData.accountNumber);
        setFieldValue('beneficiaryIfsc', selectedData.ifsc);
      }
    }
  };

  return (
    <Formik
      initialValues={{
        beneficiaryId: '',
        beneficiaryName: '',
        beneficiaryEmail: '',
        beneficiaryPhone: '',
        beneficiaryBankName: '',
        beneficiaryAccountNumber: '',
        beneficiaryIfsc: '',
        beneficiaryUpiId: '',
        beneficiaryTransferMode: 'IMPS',  // Default value for Transfer Mode
        savingsAccountNumber: '',
        savingsBalance: '',
        savingsAmount: '',
        savingsRemarks: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(impsBeneficiary(values));
        setIsSuccess(true);  // Set success state to true
        Alert.alert('Success', 'Beneficiary details submitted successfully!');
        navigation.goBack(); 
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Beneficiary Details</Text>
            <CustomSelect
              data={List}
              placeholder="Select Beneficiary"
              value={isManualInput ? '' : values.name}
              onValueChange={value => {
                handleSelectChange(value, setFieldValue);
              }}
            />
          </View>

          <FlatList
            data={[1]} // Data here is a placeholder; modify as needed
            ListHeaderComponent={() => (
              <>
                <View style={styles.mainContainer}>
                  <Text style={styles.policyDetailsText}>Beneficiary Details</Text>
                  <FlatList
                    data={[
                      { title: 'Bene. ID', inputValue: values.beneficiaryId, setInputValue: handleChange('beneficiaryId'), keyboardType: 'numeric' },
                      { title: 'Bene. Name', inputValue: values.beneficiaryName, setInputValue: handleChange('beneficiaryName'), keyboardType: 'default' },
                      { title: 'Transfer Mode', inputValue: values.beneficiaryTransferMode, setInputValue: handleChange('beneficiaryTransferMode'), },
                      { title: 'Bene. Bank Name', inputValue: values.beneficiaryBankName, setInputValue: handleChange('beneficiaryBankName'), keyboardType: 'default' },
                      { title: 'Bene. A/C No.', inputValue: values.beneficiaryAccountNumber, setInputValue: handleChange('beneficiaryAccountNumber'), keyboardType: 'numeric' },
                      { title: 'Bene. IFSC', inputValue: values.beneficiaryIfsc, setInputValue: handleChange('beneficiaryIfsc'), keyboardType: 'default' },
                    ]}
                    renderItem={({ item }) => (
                      <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{item.title}</Text>
                        <TextInput
                          style={[styles.textInput, touched[item.title] && errors[item.title]]}
                          keyboardType={item.keyboardType}
                          value={item.inputValue}
                          onChangeText={item.setInputValue}
                          onBlur={handleBlur(item.title)}
                        />
                      </View>
                    )}
                    keyExtractor={(item) => item.title}
                  />
                </View>
                <View style={styles.mainContainer}>
                  <Text style={styles.policyDetailsText}>Saving A/C Details</Text>
                  {/* <FlatList
                    data={[
                      { title: 'Saving A/C Number', fieldName: 'accountNumber', keyboardType: 'numeric' },
                      { title: 'Balance', fieldName: 'balance', keyboardType: 'numeric' },
                      { title: 'Amount', fieldName: 'amount', keyboardType: 'numeric' },
                      { title: 'Remarks', fieldName: 'remark', keyboardType: 'default' },
                    ]}
                    renderItem={({ item }) => (
                      <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{item.title}</Text>
                        <TextInput
                          style={styles.textInput}
                          keyboardType={item.keyboardType}
                          value={values[item.fieldName]} // Ensure the value is correctly bound to Formik state
                          onChangeText={handleChange(item.fieldName)} // Update the state correctly
                          onBlur={handleBlur(item.fieldName)} // Handle blur for validation
                        />
                        {touched[item.fieldName] && errors[item.fieldName] && (
                          <Text style={styles.errorText}>{errors[item.fieldName]}</Text>
                        )}
                      </View>
                    )}
                    keyExtractor={(item) => item.fieldName}
                  /> */}
                  <View style={{ marginVertical: width / 30 }}>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: "black" }}>Savings A/C No.</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=''
                    // onChangeText={savingsAccountNumber}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: "black" }}>Balance</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=''
                    // onChangeText={savingsBalance}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: "black" }}>Amount</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=''
                    // onChangeText={savingsAmount}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: "black" }}>Remarks</Text>
                    <TextInput
                      style={styles.input}
                      placeholder=''
                    // onChangeText={savingsRemarks}
                    />
                  </View>
                  <CustomButton
                    buttonTitle={"Confirm"}
                    onPress={() => handleSubmit()}  // Trigger form submission on button press
                  />
                </View>
              </>
            )}
          />
        </View>
      )}
    </Formik>
  );
};

export default ImpsTransferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  inputContainer: {
    marginBottom: 10,
  },
  card: {
    borderRadius: 12,
    backgroundColor: colors?.white,
    paddingHorizontal: width / 30,
    paddingVertical: width / 40,
    margin: "2%",
  },
  title: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
  selectBeneficiaryButton: {
    backgroundColor: colors?.greyColor,
    borderRadius: 12,
    marginTop: "2%",
    paddingHorizontal: width / 20,
    paddingVertical: width / 40,
  },
  selectBeneficiaryText: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: colors?.white,
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
    marginBottom: 10,
  },
  beneficiaryItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors?.greyColor,
  },
  beneficiaryName: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
  },
  beneficiaryDetails: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsLight,
    color: colors?.black,
  },
  mainContainer: {
    borderRadius: 10,
    backgroundColor: colors?.white,
    margin: "2%",
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
  },
  policyDetailsText: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    fontFamily: fonts?.PoppinsRegular,
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors?.greyColor,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
  },
  input: {
    width: width * 0.87,
    borderRadius: 10,
    paddingHorizontal: width / 20,
    //backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors?.greyColor,
    color: colors?.black
  },
});
