import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../../res/color';
import { width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';

const StepOne = () => {
  const [memberModalVisible, setMemberModalVisible] = useState(false);
  const [modeModalVisible, setModeModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const memberOptions = ['Bank 1', 'Bank 2', 'Bank 3'];
  const modeOptions = ['Single', 'Joint', 'Survivor'];

  const handleSelectOption = (type, option) => {
    if (type === 'member') {
      setSelectedMember(option);
      setMemberModalVisible(false);
    } else if (type === 'mode') {
      setSelectedMode(option);
      setModeModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Member Details</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.label}>Opening Date</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Select Member</Text>
          <TouchableOpacity onPress={() => setMemberModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder='Select Member'
              value={selectedMember}
              editable={false}
            />
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => setModeModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder='Select Mode of Operation'
              value={selectedMode}
              editable={false}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for Select Member */}
      <Modal
        transparent={true}
        visible={memberModalVisible}
        onRequestClose={() => setMemberModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={memberOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectOption('member', item)}
                >
                  <Text style={styles.modalOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Modal for Mode of Operation */}
      <Modal
        transparent={true}
        visible={modeModalVisible}
        onRequestClose={() => setModeModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={modeOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectOption('mode', item)}
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
    flex:1,
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
    color:colors?.black
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
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.2)',
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
});
