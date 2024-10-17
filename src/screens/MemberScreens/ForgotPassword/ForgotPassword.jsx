import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../res/color';
import fonts from '../../../res/fonts';
import ScreenConstants from '../../../Navigators/ScreenConstants';
import { height, width } from '../../../res/string';
import { BlackArrowBack_Icon, Call_Icon, ForgotPass_Icon } from '../../../res/icons';
import CustomTextInput from '../../../component/CustomTextInput';
import CustomButton from '../../../component/CustomButton';
import { useDispatch } from 'react-redux';
import { validateMobile } from '../../../stores/MemberAPI/loginStores/loginSlice';

const ForgotPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch(); // Initialize dispatch

    // Define the data for phone number input
    const phoneNumberInputProps = {
        title: 'Phone Number',
        placeholder: 'Enter your Phone Number',
        leftIcon: Call_Icon,
        value: phoneNumber,
        onChangeText: setPhoneNumber,
    };

    const handleSubmit = async () => {
        if (phoneNumber.trim()) {
            try {
                // Dispatch the whatsappOtp action
                await dispatch(validateMobile({ phoneNumber })).unwrap();
                // Navigate to the OTP screen after successfully submitting the OTP
                navigation.navigate(ScreenConstants.OTP_SCREEN);
            } catch (error) {
                Alert.alert('Error', 'Failed to send OTP. Please try again.'); // Handle error
            }
        } else {
            Alert.alert('Error', 'Please enter a valid phone number.'); // Validate input
        }
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.iconWrapperBack} onPress={() => navigation.goBack()}>
                <BlackArrowBack_Icon height={width / 16} width={width / 16} />
            </Pressable>
            <View style={styles.iconWrapper}>
                <ForgotPass_Icon height={height / 4} width={width} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.heading}>Forgot Password</Text>
                <Text style={styles.subHeading}>
                    Don’t worry! It happens. Please enter the phone number associated with your account.
                </Text>
                <CustomTextInput {...phoneNumberInputProps} />
                <CustomButton 
                    buttonTitle={"Submit"} 
                    onPress={handleSubmit} // Use the new handleSubmit function
                />
            </View>
        </View>
    );
};

export default ForgotPassword;

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




// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     StyleSheet,
//     Pressable,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { colors } from '../../../res/color';
// import fonts from '../../../res/fonts';
// import ScreenConstants from '../../../Navigators/ScreenConstants';
// import { height, width } from '../../../res/string';
// import { BlackArrowBack_Icon, Call_Icon, ForgotPass_Icon } from '../../../res/icons';
// import CustomTextInput from '../../../component/CustomTextInput';
// import CustomButton from '../../../component/CustomButton';

// const ForgotPassword = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const navigation = useNavigation();

//     // Define the data for phone number input
//     const phoneNumberInputProps = {
//         title: 'Phone Number',
//         placeholder: 'Enter your Phone Number',
//         leftIcon: Call_Icon,
//         value: phoneNumber,
//         onChangeText: setPhoneNumber,
//     };

//     return (
//         <View style={styles.container}>
//             <Pressable style={styles.iconWrapperBack} onPress={() => navigation.goBack()}>
//                 <BlackArrowBack_Icon height={width / 16} width={width / 16} />
//             </Pressable>
//             <View style={styles.iconWrapper}>
//                 <ForgotPass_Icon height={height / 4} width={width} />
//             </View>
//             <View style={styles.textWrapper}>
//                 <Text style={styles.heading}>Forgot Password</Text>
//                 <Text style={styles.subHeading}>
//                     Don’t worry! It happens. Please enter the phone number associated with your account.
//                 </Text>
//                 <CustomTextInput {...phoneNumberInputProps} />
//                 <CustomButton 
//                     buttonTitle={"Submit"} 
//                     onPress={() => navigation.navigate(ScreenConstants.OTP_SCREEN)} 
//                 />
//             </View>
//         </View>
//     );
// };

// export default ForgotPassword;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.screenBackColor,
//         paddingHorizontal: width / 16,
//         paddingVertical: width / 25,
//     },
//     iconWrapperBack: {
//         alignSelf: 'flex-start',
//         padding: 10,
//     },
//     iconWrapper: {
//         alignItems: 'center',
//         marginBottom: width / 10,
//     },
//     textWrapper: {
//         alignItems: 'center',
//     },
//     heading: {
//         fontSize: 20,
//         fontFamily: fonts.PoppinsSemiBold,
//         color: colors.black,
//         marginBottom: 10,
//     },
//     subHeading: {
//         fontSize: 12,
//         color: colors.black,
//         marginBottom: 20,
//         fontFamily: fonts.PoppinsRegular,
//         width: '85%',
//         textAlign: 'center',
//         lineHeight: 18,
//     },
// });
