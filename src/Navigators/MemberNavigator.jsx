import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import ScreenConstants from './ScreenConstants';
import { colors } from '../res/color';
import fonts from '../res/fonts';
import { AccountScreen, BiometricScreen, ChangeMpinScreen, ContactUsScreen, HomeMemberScreen ,MemberProfileScreen, MyProfileScreen, PoliciesScreen, RenewalScreen} from '../screens';
import MemberBottomTab from './BottomTabNavigator';

const Stack = createStackNavigator();

const MemberNavigator = () => {
    const config = {
        animation: 'timing',
        config: {
            duration: 400,
            easing: Easing.linear,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 200,
            easing: Easing.linear,
        },
    };

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: Platform.OS === 'android' ? 'left' : 'center',
                color:colors?.primaryColor,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                headerStyle: {
                    backgroundColor: colors?.primaryColor,
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: "white",
                  headerTitleStyle: {  fontFamily:fonts?.PoppinsSemiBold },
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
        >
            
            <Stack.Screen name={ScreenConstants?.MEMBER_BOTTOM_TAB} component={MemberBottomTab}   options={{ headerShown: false, title: '' }} />
            <Stack.Screen name={ScreenConstants?.MEMBER_PROFILE_SCREEN} component={MemberProfileScreen} options={{ headerShown: false, title: ''  }} />
            <Stack.Screen name={ScreenConstants?.HOME_MEMBER_SCREEN} component={HomeMemberScreen}   options={{ headerShown: false, title: '' }} />
            <Stack.Screen name={ScreenConstants?.MY_PROFILE_SCREEN} component={MyProfileScreen}   options={{ headerShown: true, title: 'MyProfile' }} />
            <Stack.Screen name={ScreenConstants?.BIOMETRIC_SCREEN} component={BiometricScreen}   options={{ headerShown: true, title: 'Biometric' }} />
            <Stack.Screen name={ScreenConstants?.CONTACTUS_SCREEN} component={ContactUsScreen}   options={{ headerShown: true, title: 'Contact Us' }} />
            <Stack.Screen name={ScreenConstants?.POLICIES_SCREEN} component={PoliciesScreen}   options={{ headerShown: true, title: 'Policies' }} />
            <Stack.Screen name={ScreenConstants?.CHANGEMPIN_SCREEN} component={ChangeMpinScreen}   options={{ headerShown: true, title: 'Change MPIN' }} />
            <Stack.Screen name={ScreenConstants?.RENEWAL_SCREEN} component={RenewalScreen}   options={{ headerShown: true, title: 'Renewals' }} />
            <Stack.Screen name={ScreenConstants?.ACCOUNT_SCREEN} component={AccountScreen}   options={{ headerShown: true, title: 'All Account Statement' }} />
        </Stack.Navigator>
    );
};
export default MemberNavigator;
