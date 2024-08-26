import { View, Text, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';
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

const NeftTransferScreen = () => {
  const List = useSelector(state => state.addBeneficiarySlice.memberBeneficiaryListData);
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isManualInput, setIsManualInput] = useState(false);

  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(false); // State to store selected beneficiary

  useEffect(() => {
    dispatch(memberBeneficiaryList());
  }, [dispatch]);

  const handleSelectBeneficiary = (beneficiary, setFieldValue) => {
    setSelectedBeneficiary(beneficiary);
    setFieldValue('beneficiaryId', beneficiary.id);
    setFieldValue('beneficiaryName', beneficiary.name);
    setFieldValue('beneficiaryEmail', beneficiary.email);
    setFieldValue('beneficiaryPhone', beneficiary.phone);
    setFieldValue('beneficiaryBankName', beneficiary.bankName);
    setFieldValue('beneficiaryAccountNumber', beneficiary.accountNumber);
    setFieldValue('beneficiaryIfsc', beneficiary.ifsc);
    setFieldValue('beneficiaryUpiId', beneficiary.upiId);
    // setFieldValue('beneficiaryTransferMode', mode);
    setModalVisible(false);
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
        beneficiaryTransferMode: '',
        accountNumber: '',
        amount: '',
        balance: '',
        remark: '',
      }}
      onSubmit={(values) => {
        dispatch(impsBeneficiary(values));
        navigation.goBack();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Beneficiary Details</Text>
            <TouchableOpacity
              style={styles.selectBeneficiaryButton}
              onPress={() => setModalVisible(true)} // Open modal on press
            >
              <Text style={styles.selectBeneficiaryText}>Select Beneficiary</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={[1]}
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
                      <CustomTextInput
                        inputData={{
                          title: item.title,
                          inputValue: item.inputValue,
                          actionSecond: handleBlur(item.title),
                          isId: item.inputValue,
                        }}
                      />
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
                      <CustomTextInput
                        inputData={{
                          title: item.title,
                          inputValue: item.inputValue,
                          actionSecond: handleBlur(item.title),
                          isId: item.inputValue,
                        }}
                      />
                    )}
                    keyExtractor={(item) => item.title}
                  />
                  <CustomButton buttonTitle={"Confirm"} onPress={handleSubmit} />
                </View>
              </>
            )}
          />

          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Beneficiary</Text>
                <FlatList
                  data={List}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.beneficiaryItem}
                      onPress={() => handleSelectBeneficiary(item, setFieldValue)}
                    >
                      <Text style={styles.beneficiaryName}>{item.id} - {item.name}</Text>
                      <Text style={styles.beneficiaryDetails}>{item.accountNumber} - {item.bankName}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id.toString()}
                />
                <CustomButton buttonTitle={"Close"} onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
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
});
