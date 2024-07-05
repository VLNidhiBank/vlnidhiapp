import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../res/color';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, SignIn_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';

interface SignInProps {
  data: {
    title: string;
  };
}

const SignIn: React.FC<SignInProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <BlackArrowBack_Icon height={width / 14} width={width / 14} />
      </View>
      <View style={styles.iconWrapper}>
        <SignIn_Icon height={width / 14} width={width / 14} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>
          Sign in to your account to manage your finances with ease.
        </Text>
        <CustomTextInput title={data.title} />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: height,
    padding: 16,
  },
  iconWrapper: {
    marginBottom: 20,
  },
  textWrapper: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryColor,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 20,
  },
});
