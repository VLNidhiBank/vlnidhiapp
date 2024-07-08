import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../res/color';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, Lock_Icon, PassEye_Icon, SignIn_Icon, SignInAdvisor_Icon, User_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import fonts from '../../../res/fonts';
import CustomButton from '../../../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import ScreenConstants from '../../../Navigators/ScreenConstants';



// Define the types for the props of SignIn component
interface SignInAdvisorProps {
  data: {
    title: string;
    InputValue: string | number;
    placeholder: string;
  };
  inputData: {
    title: string;
    palceHolderText: string;
    FirstIcon: React.FC<{ height: number; width: number }>; // Adjust according to your icon component props
    SecondIcon?: React.FC<{ height: number; width: number }>; // Optional icon
    inputValue: string;
    actionSecond?: () => void;
    changedText: (text: string) => void;
    isPassword?: boolean;
  };
}

const SignInAdvisor: React.FC<SignInAdvisorProps> = ({ data }) => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);


  const navigation = useNavigation()
  // Define the data for userId input
  const userIdData = {
    title: 'User Id',
    palceHolderText: 'Enter your User Id',
    FirstIcon: User_Icon,
    inputValue: userId,
    changedText: (text: string) => setUserId(text),
  };

  // Define the data for password input
  const passwordData = {
    title: 'Password',
    palceHolderText: 'Enter your Password',
    FirstIcon: User_Icon,
    SecondIcon: PassEye_Icon,
    inputValue: password,
    actionSecond: () => setShowPassword(!showPassword),
    changedText: (text: string) => setPassword(text),
    isPassword: showPassword,
  };

  // Define the data for button
  const buttonData = {
    buttonTitle: 'Sign In',
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.iconWrapperBack} onPress={() => navigation?.goBack()}>
        <BlackArrowBack_Icon height={width / 16} width={width / 16} />
      </Pressable>
      <View style={styles.iconWrapper}>
        <SignInAdvisor_Icon height={height / 4} width={width} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>
          Sign in to your account to manage your finances with ease.
        </Text>
        <CustomTextInput inputData={userIdData} />
        <CustomTextInput inputData={passwordData} />
        <Pressable style={styles.forgotPassView} onPress={() => {navigation?.navigate()}} >
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </Pressable>
        <CustomButton buttonTitle={buttonData.buttonTitle} />
      </View>
    </View>
  );
};

export default SignInAdvisor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.screenBackColor,
    height: height,
    // padding: 16,
    paddingHorizontal: width /16,
    paddingVertical: width /25,
  },
  iconWrapper: {
    marginBottom: 20,
    marginVertical: width / 10,
  },
  iconWrapperBack: {
    width: width / 12,
  },
  textWrapper: {
    marginTop: 20,
    justifyContent: 'center',
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
  },
  forgotPassView: {
    width: '100%',
  },
  forgotPassText: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 12,
    width: '100%',
    textAlign: 'right',
    marginVertical: 10,
  },
});
