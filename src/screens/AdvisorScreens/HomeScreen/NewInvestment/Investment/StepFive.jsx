import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import fonts from '../../../../../res/fonts';
import { colors } from '../../../../../res/color';
import { width } from '../../../../../res/string';

const StepFive = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPayMode, setSelectedPayMode] = useState('');
  const [payMode, setPayMode] = useState('');

  const payModes = ['Cash', 'SBAccount'];

  const handleSelectPayMode = (mode) => {
    setPayMode(mode);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Details</Text>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.label}>Pay Mode</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <TextInput
              style={styles.input}
              placeholder='Select Pay Mode'
              value={payMode}
              editable={false}
            />
          </TouchableOpacity>
        </View>

        {payMode === 'SBAccount' && (
          <>
            <View style={styles.content}>
              <Text style={styles.label}>SB Account</Text>
              <TextInput style={styles.input} placeholder='Enter Account Number' />
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>Balance</Text>
              <TextInput style={styles.input} placeholder='Enter Account Holder Name' />
            </View>
            {/* <View style={styles.content}>
              <Text style={styles.label}>Bank Name</Text>
              <TextInput style={styles.input} placeholder='Enter Bank Name' />
            </View>
            <View style={styles.content}>
              <Text style={styles.label}>IFSC Code</Text>
              <TextInput style={styles.input} placeholder='Enter IFSC Code' />
            </View> */}
          </>
        )}

        <View style={styles.content}>
          <Text style={styles.label}>Remark</Text>
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
              data={payModes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectPayMode(item)}
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

export default StepFive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.white,
    borderRadius: 20,
    paddingVertical: width / 20,
    paddingHorizontal: width / 20,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsSemiBold,
    color: colors?.black,
  },
  content: {
    paddingVertical: width / 30,
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
