import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { addBeneficiary } from '../../../../../stores/addBeneficiaryStores/addBeneficiarySlice';
import CustomButton from '../../../../../component/CustomButton';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';
import CustomModal from '../../../../../component/Common/CustomModal';

// Define validation schema with Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must be numeric').required('Phone number is required'),
  bankName: Yup.string().required('Bank name is required'),
  accountNumber: Yup.string().matches(/^[0-9]+$/, 'Account number must be numeric').required('Account number is required'),
  confirmAccountNumber: Yup.string().oneOf([Yup.ref('accountNumber'), null], 'Account numbers must match').required('Confirm account number is required'),
  ifsc: Yup.string().required('IFSC code is required'),
  upiId: Yup.string().required('UPI ID is required'),
});

const inputFields = [
  { name: 'name', label: 'Name', keyboardType: 'default' },
  { name: 'email', label: 'Email', keyboardType: 'default' },
  { name: 'phone', label: 'Phone', keyboardType: 'numeric' },
  { name: 'bankName', label: 'Bank Name', keyboardType: 'default' },
  { name: 'accountNumber', label: 'A/C No.', keyboardType: 'numeric' },
  { name: 'confirmAccountNumber', label: 'Confirm A/C No.', keyboardType: 'numeric' },
  { name: 'ifsc', label: 'IFSC', keyboardType: 'default' },
  { name: 'upiId', label: 'UPI Id', keyboardType: 'default' },
];

const AddBeneficiaryScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation(); 

  const handleSubmit = (values) => {
    dispatch(addBeneficiary(values));
    setModalVisible(true); // Show the success modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Add Beneficiary</Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            bankName: '',
            accountNumber: '',
            confirmAccountNumber: '',
            ifsc: '',
            upiId: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <ScrollView>
              {inputFields.map((field) => (
                <View key={field.name} style={{ marginTop: "3%" }}>
                  <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{field.label}</Text>
                  <TextInput
                    style={[styles.input, touched[field.name] && errors[field.name] ? styles.inputError : null]}
                    placeholder={field.label}
                    keyboardType={field.keyboardType}
                    onChangeText={handleChange(field.name)}
                    onBlur={handleBlur(field.name)}
                    value={values[field.name]}
                  />
                  {touched[field.name] && errors[field.name] ? (
                    <Text style={styles.errorText}>{errors[field.name]}</Text>
                  ) : null}
                </View>
              ))}
              <View style={{ padding: "3%" }}>
                <CustomButton buttonTitle={"Save"} onPress={handleSubmit} />
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
      {/* Add the CustomModal */}
      <CustomModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.goBack(); // Navigate back after closing the modal
        }}
        type="success" // Pass 'success' to display success message
      />
    </View>
  );
};

export default AddBeneficiaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    flex: 1,
    margin: "2%",
    backgroundColor: colors?.white,
    borderRadius: 12,
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
    marginTop: "4%",
  },
  input: {
    width: width * 0.85,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 12,
    padding: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginTop: 4,
  },
});
