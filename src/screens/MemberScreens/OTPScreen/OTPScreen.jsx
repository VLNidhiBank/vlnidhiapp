import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../res/color';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, VerifyVector_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import fonts from '../../../res/fonts';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../component/CustomButton';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');

  const navigation = useNavigation();

  // Define the data for OTP input
  const otpInputProps = {
    title: 'Verification Code',
    placeholder: 'Enter your 4-digit code',
    value: otp,
    onChangeText: setOtp,
    keyboardType: 'numeric',
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrapperBack} onPress={() => navigation.goBack()}>
        <BlackArrowBack_Icon height={width / 16} width={width / 16} />
      </Pressable>
      <View style={styles.iconWrapper}>
        <VerifyVector_Icon height={height / 3.5} width={width / 1.2} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Verification Code</Text>
        <Text style={styles.subHeading}>
          A 4-digit code has been sent to +91 701*****34
        </Text>
        <CustomTextInput {...otpInputProps} />
        <CustomButton 
          buttonTitle={"Verify"} 
          onPress={() => navigation.navigate(ScreenConstants.RESET_PASSWORD)} 
        />
      </View>
    </View>
  );
};

export default OTPScreen;

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
