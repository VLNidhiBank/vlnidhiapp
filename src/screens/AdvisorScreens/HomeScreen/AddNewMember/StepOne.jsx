import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import { colors } from '../../../../res/color';
import { width } from '../../../../res/string';
import fonts from '../../../../res/fonts';

const StepOne = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const [relativeRelation, setRelativeRelation] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [state, setState] = useState('');

  const options = {
    relativeRelation: ['Father', 'Mother', 'Brother', 'Sister', 'Spouse', 'Wife', 'Husband', 'Daughter in Law', 'Son', 'Daughter'],
    gender: ['Male', 'Female', 'Other'],
    maritalStatus: ['Single', 'Married', 'Divorced', 'Widowed', 'Unmarried', 'Separated'],
    state: ['Odissa', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'],
  };

  const handleSelectOption = (option) => {
    switch (modalType) {
      case 'relativeRelation':
        setRelativeRelation(option);
        break;
      case 'gender':
        setGender(option);
        break;
      case 'maritalStatus':
        setMaritalStatus(option);
        break;
      case 'state':
        setState(option);
        break;
      default:
        break;
    }
    setModalVisible(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Member Details</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.label}>Verify With</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Registration Date</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Member Name</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Relative Name</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Relative Relation</Text>
          <TouchableOpacity onPress={() => openModal('relativeRelation')}>
            <TextInput
              style={styles.input}
              placeholder='Select Relative Relation'
              value={relativeRelation}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Gender</Text>
          <TouchableOpacity onPress={() => openModal('gender')}>
            <TextInput
              style={styles.input}
              placeholder='Select Gender'
              value={gender}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContent}>
          <View style={styles.halfContent}>
            <Text style={styles.label}>DOB</Text>
            <TextInput style={styles.input1} placeholder='' keyboardType='numeric' />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.label}>Age</Text>
            <TextInput style={styles.input1} placeholder='' keyboardType='numeric' />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Marital Status</Text>
          <TouchableOpacity onPress={() => openModal('maritalStatus')}>
            <TextInput
              style={styles.input}
              placeholder='Select Marital Status'
              value={maritalStatus}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>District</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>State</Text>
          <TouchableOpacity onPress={() => openModal('state')}>
            <TextInput
              style={styles.input}
              placeholder='Select State'
              value={state}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Pin Code</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Aadhar Number</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Pan Number</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Email ID</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Occupation</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Education</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={options[modalType]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectOption(item)}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.white,
    borderRadius: 20,
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
    width: width * 0.35,
    marginHorizontal: width / 40,
  },
  label: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: width / 20,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
    color:colors?.black,
  },
  input1: {
    borderRadius: 10,
    paddingHorizontal: width / 20,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
    color:colors?.black,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: colors?.white,
    borderRadius: 10,
    padding: 20,
  },
  modalOption: {
    paddingVertical: 10,
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
});
