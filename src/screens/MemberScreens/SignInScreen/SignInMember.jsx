import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../res/color';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, Lock_Icon, PassEye_Icon, SignIn_Icon, User_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import fonts from '../../../res/fonts';
import { useNavigation } from '@react-navigation/native';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import CustomButton from '../../../component/CustomButton';

const SignInMember = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  // Define the data for userId input
  const userIdInputProps = {
    title: 'User Id',
    placeholder: 'Enter your User Id',
    leftIcon: User_Icon,
    value: userId,
    onChangeText: setUserId,
  };

  // Define the data for password input
  const passwordInputProps = {
    title: 'Password',
    placeholder: 'Enter your Password',
    leftIcon: Lock_Icon,
    rightIcon: PassEye_Icon,
    value: password,
    onRightIconPress: () => setShowPassword(!showPassword),
    onChangeText: setPassword,
    secureTextEntry: !showPassword,
  };

  const handleSignIn = () => {
    // Handle sign-in logic
    console.log('Sign In Pressed');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backIconWrapper} onPress={() => navigation.goBack()}>
        <BlackArrowBack_Icon height={width / 16} width={width / 16} />
      </Pressable>
      <View style={styles.iconWrapper}>
        <SignIn_Icon height={height / 4} width={width} />
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>
          Sign in to your account to manage your finances with ease.
        </Text>
        <CustomTextInput {...userIdInputProps} />
        <CustomTextInput {...passwordInputProps} />
        <Pressable style={styles.forgotPasswordWrapper} onPress={() => navigation.navigate(ScreenConstants.FORGOT_PASSWORD_SCREEN)}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
        <CustomButton buttonTitle={"Sign In"} onPress={handleSignIn} />
      </View>
    </View>
  );
};

export default SignInMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackColor,
    paddingHorizontal: width / 16,
    paddingVertical: width / 25,
  },
  backIconWrapper: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: width / 10,
  },
  formWrapper: {
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
  forgotPasswordWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: width / 50,
  },
  forgotPasswordText: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 12,
    color: colors.primary, // Updated to a primary color for better visibility
  },
});
