import React from 'react';
import { Pressable, Text, View, StyleSheet, TextInput } from 'react-native';
import { colors } from '../res/color';
import { height, width } from '../res/string';
import fonts from '../res/fonts';

const CustomTextInput = ({
  title,
  placeholder,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  value,
  onChangeText,
  onRightIconPress,
  secureTextEntry,
  ...rest
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.textInputContainer}>
        {LeftIcon && (
          <LeftIcon height={width / 20} width={width / 20} />
        )}
        <TextInput
          style={[styles.textInput, value ? styles.textFilled : styles.placeholderStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />
        {RightIcon && (
          <Pressable onPress={onRightIconPress}>
            <RightIcon height={width / 20} width={width / 20} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.PoppinsRegular,
    marginBottom: 8,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: height / 18,
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.PoppinsMedium,
    fontSize: 14,
    paddingLeft: 10,
    color: colors.black,
  },
  textFilled: {
    color: colors.black,
  },
  placeholderStyle: {
    color: colors.grey,
  },
});
