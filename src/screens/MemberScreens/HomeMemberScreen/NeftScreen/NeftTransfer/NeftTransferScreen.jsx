import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../../../res/color';
import fonts from '../../../../../res/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { height, width } from '../../../../../res/string';
import CustomTextInput from '../../../../../component/CustomTextInput';
import CustomButton from '../../../../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomSelect from '../../../../../component/Common/CustomSelect';
import { impsBeneficiary, memberBeneficiaryList } from '../../../../../stores/MemberAPI/addBeneficiaryStores/addBeneficiarySlice';

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
  accountNumber: Yup.string().matches(/^[0-9]+$/, 'Account number must be numeric').required('Account Number is required'),
  amount: Yup.number().positive('Amount must be positive').required('Amount is required'),
  balance: Yup.number().positive('Balance must be positive').required('Balance is required'),
  remark: Yup.string().optional(),
});

const NeftTransferScreen = () => {
  const List = useSelector(state => state.addBeneficiarySlice.memberBeneficiaryListData);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isManualInput, setIsManualInput] = useState(false);


  useEffect(() => {
    dispatch(memberBeneficiaryList());
  }, [dispatch]);

  const handleSelectChange = (value, setFieldValue) => {
    if (value) {
      const selectedData = List.find(item => item.name === value);
      if (selectedData) {
        console.log(selectedData,"This is selectedDatas")
        setIsManualInput(false);
        setFieldValue('beneficiaryId', selectedData.id.toString())
        setFieldValue('beneficiaryName', selectedData.name);
        setFieldValue('beneficiaryBankName', selectedData.bankName);
        setFieldValue('beneficiaryAccountNumber', selectedData.accountNumber);
        setFieldValue('beneficiaryIfsc', selectedData.ifsc);
      }
    }
  };


  console.log(List,"List inside ocmponent")
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
        beneficiaryTransferMode: 'NEFT', // Default value for Transfer Mode
        // accountNumber: '',
        // amount: '',
        // balance: '',
        // remark: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(impsBeneficiary(values));
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
                      { title: 'Bene. ID', inputValue: values.beneficiaryId, setInputValue: handleChange('beneficiaryId') },
                      { title: 'Bene. Name', inputValue: values.beneficiaryName, setInputValue: handleChange('beneficiaryName') },
                      { title: 'Transfer Mode', inputValue: values.beneficiaryTransferMode, setInputValue: handleChange('beneficiaryTransferMode') },
                      { title: 'Bene. Bank Name', inputValue: values.beneficiaryBankName, setInputValue: handleChange('beneficiaryBankName') },
                      { title: 'Bene. A/C No.', inputValue: values.beneficiaryAccountNumber, setInputValue: handleChange('beneficiaryAccountNumber') },
                      { title: 'Bene. IFSC', inputValue: values.beneficiaryIfsc, setInputValue: handleChange('beneficiaryIfsc') },
                    ]}
                    renderItem={({ item }) => (
                      <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{item.title}</Text>
                        <TextInput
                          style={styles.textInput}
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
                  <FlatList
                    data={[
                      { title: 'Saving A/C Number', inputValue: values.accountNumber, setInputValue: handleChange('accountNumber') },
                      { title: 'Balance', inputValue: values.balance, setInputValue: handleChange('balance') },
                      { title: 'Amount', inputValue: values.amount, setInputValue: handleChange('amount') },
                      { title: 'Remarks', inputValue: values.remark, setInputValue: handleChange('remark') },
                    ]}
                    renderItem={({ item }) => (
                      <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>{item.title}</Text>
                        <TextInput
                          style={styles.textInput}
                          value={item.inputValue}
                          onChangeText={item.setInputValue}
                          onBlur={handleBlur(item.title)}
                        />
                      </View>
                    )}
                    keyExtractor={(item) => item.title}
                    />
                  {touched && Object.keys(errors).length > 0 && (
                    <Text style={styles.errorText}>Please correct the errors before submitting.</Text>
                  )}
                  <CustomButton buttonTitle={"Confirm"} onPress={handleSubmit} />
                </View>
              </>
            )}
          />

        </View>
      )}
    </Formik>
  );
};

export default NeftTransferScreen;

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
});
