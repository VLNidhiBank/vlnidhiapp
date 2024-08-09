import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';
import CustomButton from '../../../../../component/CustomButton';
import { useDispatch } from 'react-redux';
import { addBeneficiary } from '../../../../../stores/addBeneficiaryStores/addBeneficiarySlice';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifsc: '',
    upiId: '',
  });

  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize useNavigation

  const onHandleSubmit = () => {
    dispatch(addBeneficiary(formData));
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Add Beneficiary</Text>
        <ScrollView>
          {inputFields.map((field) => (
            <View key={field.name} style={{ marginTop: "3%" }}>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{field.label}</Text>
              <TextInput
                style={styles.input}
                placeholder=''
                keyboardType={field.keyboardType}
                onChangeText={(text) => handleInputChange(field.name, text)}
                value={formData[field.name]}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ padding: "3%" }}>
        <CustomButton buttonTitle={"Save"} onPress={onHandleSubmit} />
      </View>
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
});
