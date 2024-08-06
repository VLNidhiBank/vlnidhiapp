import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { colors } from '../../../../../res/color';
import { width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';

const StepOne = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState('');
  const [jointFields, setJointFields] = useState(false);

  const modesOfOperation = ['Single', 'Joint'];

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setJointFields(mode === 'Joint');
    setModalVisible(false);
  };

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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder='Select Mode of Operation'
              value={selectedMode}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        {jointFields && (
          <View>
            <View style={styles.content}>
              <Text style={styles.label}>Joint Code</Text>
              <TextInput style={styles.input} placeholder='' />
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Joint Name</Text>
              <TextInput style={styles.input} placeholder='' />
            </View>
          </View>
        )}
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={modesOfOperation}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectMode(item)}
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
    color:colors?.black
  },
  input1: {
    borderRadius: 10,
    paddingHorizontal: width / 20,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    marginTop: 5,
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
