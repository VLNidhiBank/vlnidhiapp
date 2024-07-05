import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  title: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ title }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
