import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../../../res/color';
import { width } from '../../../../res/string';
import fonts from '../../../../res/fonts';

const StepThree = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedShareAllotedFrom, setSelectedShareAllotedFrom] = useState('');

  const shareAllotedFromOptions = ['Advisor ID 1', 'Advisor ID 2', 'Advisor ID 3', 'Advisor ID 4'];

  const handleSelectOption = (option) => {
    setSelectedShareAllotedFrom(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fees Details</Text>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Fees(If Any)</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Share Alloted From</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder='Select Share Alloted From'
              value={selectedShareAllotedFrom}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>No. Of Share</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Share Amount</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Payment By</Text>
          <TextInput style={styles.input} placeholder='' />
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Remarks</Text>
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
              data={shareAllotedFromOptions}
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

export default StepThree;

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
    marginBottom: width / 25,
  },
  content: {
    paddingVertical: width / 30,
    paddingHorizontal: width / 20,
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
  },
  modalOptionText: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
});
