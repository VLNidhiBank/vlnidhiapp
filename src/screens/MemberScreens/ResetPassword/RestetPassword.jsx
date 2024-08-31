import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../res/color';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, Lock_Icon, PassEye_Icon, ResetPassVector_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import fonts from '../../../res/fonts';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../component/CustomButton';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  // Define the data for new password input
  const newPasswordInputProps = {
    title: 'New Password',
    placeholder: 'Enter your new password',
    leftIcon: Lock_Icon,
    rightIcon: PassEye_Icon,
    value: newPassword,
    onChangeText: setNewPassword,
    isPassword: !showPassword,
    onRightIconPress: () => setShowPassword(!showPassword),
  };

  // Define the data for confirm password input
  const confirmPasswordInputProps = {
    title: 'Confirm New Password',
    placeholder: 'Confirm your new password',
    leftIcon: Lock_Icon,
    rightIcon: PassEye_Icon,
    value: confirmPassword,
    onChangeText: setConfirmPassword,
    isPassword: !showPassword,
    onRightIconPress: () => setShowPassword(!showPassword),
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrapperBack} onPress={() => navigation.goBack()}>
        <BlackArrowBack_Icon height={width / 16} width={width / 16} />
      </Pressable>
      <View style={styles.iconWrapper}>
        <ResetPassVector_Icon height={height / 4} width={width} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subHeading}>
          Your new password must be different from your previous password.
        </Text>
        <CustomTextInput {...newPasswordInputProps} />
        <CustomTextInput {...confirmPasswordInputProps} />
        <CustomButton 
          buttonTitle={"Reset Password"} 
          onPress={() => {
            if (newPassword === confirmPassword && newPassword.length > 0) {
              navigation.navigate(ScreenConstants.SUCCESS_SCREEN); // Assuming you have a success screen
            } else {
              alert("Passwords do not match or are empty.");
            }
          }} 
        />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackColor,
    paddingHorizontal: width / 16,
    paddingVertical: width / 25,
  },
  iconWrapperBack: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: width / 10,
  },
  textWrapper: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: fonts.PoppinsSemiBold,
    color: colors.black,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 12,
    color: colors.black,
    marginBottom: 20,
    fontFamily: fonts.PoppinsRegular,
    width: '85%',
    textAlign: 'center',
    lineHeight: 18,
  },
});
