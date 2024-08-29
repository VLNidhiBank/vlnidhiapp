import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';
import CustomButton from '../../../../../component/CustomButton';
import { Close_Icon } from '../../../../../res/icons';

const inputFields = [
  { label: 'Scheme Type', placeholder: '' },
  { label: 'Scheme Name', placeholder: '' },
  { label: 'Term', placeholder: '', width: width * 0.4 },
  { label: 'Mode', placeholder: '', width: width * 0.4 },
  { label: 'Amount', placeholder: '' },
  { label: 'Deposit Amount', placeholder: '' },
  { label: 'Maturity Amount', placeholder: '' },
  { label: 'MIS Interest', placeholder: '' }
];

const PolicyCalculatorScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMode, setSelectedMode] = useState('');
  const [schemeType, setSchemeType] = useState(false);

  const Types = ['DRD', 'FD', 'MIS', 'RD'];

  const handleSelectMode = (mode) => {
    setSelectedMode(mode);
    setSchemeType(mode === 'DRD');
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Policy Calculator</Text>

          {/* {inputFields.map((field, index) => (
            <View style={styles.calculator} key={index}>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>
                {field.label}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  field.width ? { width: field.width } : null,
                  { marginTop: field.width ? "0" : "3%" }
                ]}
                placeholder={field.placeholder}
              />
            </View>
          ))} */}
          <View style={styles.content1}>
            <Text style={styles.label}>Nominee Relation</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <TextInput
                style={styles.input}
                placeholder='Select Nominee Relation'
                value={schemeType}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.label}>Scheme Name</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View>
            <Text style={styles.label}>Term/Mode</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View>
            <Text style={styles.label}>Deposit Amount</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View>
            <Text style={styles.label}>Maturity Amount</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>
          <View>
            <Text style={styles.label}>MIS Interest</Text>
            <TextInput style={styles.input} placeholder='' />
          </View>

          <View style={{ padding: "3%" }}>
            <CustomButton buttonTitle={"Calculate"} />
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Close_Icon width={width / 14} height={height / 20} />
            </TouchableOpacity>
            <FlatList
              data={Types}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.modalOption}
                  onPress={() => handleSelectRelation(item)}
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
}

export default PolicyCalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin: "2%",
    backgroundColor: colors?.white,
    borderRadius: 12,
    paddingHorizontal: width / 20,
    paddingVertical: width / 25,
    marginTop: "4%"
  },
  input: {
    width: width * 0.85,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 12,
  },
  calculator: {
    marginTop: "3%",
  },
  content1: {
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
    color: colors?.black
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
  closeButton: {
    position: 'absolute',
    // top: 10,
    right: 10,
    // zIndex: 1, // Ensure it's above other elements
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
