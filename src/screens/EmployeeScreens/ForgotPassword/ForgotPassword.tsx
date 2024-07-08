import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { colors } from '../../../res/color';
import fonts from '../../../res/fonts';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, Call_Icon, ForgotPass_Icon, SignIn_Icon, User_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import CustomButton from '../../../component/CustomButton';



type RootStackParamList = {
    [key in keyof typeof ScreenConstants]: undefined;
  };


interface ForgotPasswordProps {
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
    data: {
      title: string;
      InputValue: string | number;
      placeholder: string;
    };
  }

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
    const [userId, setUserId] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
  
  
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Define the data for userId input
    const userIdData = {
      title: 'Phone  No',
      palceHolderText: 'Password',
      FirstIcon: Call_Icon,
      inputValue: userId,
      changedText: (text: string) => setUserId(text),
    };
  
   
    // Define the data for button
    const buttonData = {
      buttonTitle: 'Submit',
    };

    return (
        <View style={styles.container}>
        <Pressable style={styles.iconWrapperBack} onPress={() => navigation?.goBack()}>
          <BlackArrowBack_Icon height={width / 16} width={width / 16} />
        </Pressable>
        <View style={styles.iconWrapper}>
          <ForgotPass_Icon height={height / 4} width={width} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.heading}>Forgot Password</Text>
          <Text style={styles.subHeading}>
          Don’t worry! It happens. Please enter the email address associated with your account.
          </Text>
          <CustomTextInput inputData={userIdData} />
          <CustomButton buttonTitle={buttonData.buttonTitle} onPress={()  => navigation?.navigate(ScreenConstants?.OTP_SCREEN)} />
        </View>
      </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.screenBackColor,
        height: height,
        // padding: width /10,
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
