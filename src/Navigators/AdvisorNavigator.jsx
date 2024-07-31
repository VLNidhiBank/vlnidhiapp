import { View, Text, Easing, Platform } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { colors } from '../res/color';
import fonts from '../res/fonts';
import ScreenConstants from './ScreenConstants';
import { AdvisorMpinScreen, AdvisorProfile, HomeAdvisorScreen, KycScreen, LoanScreen, LocationView, ProfileScreen, UploadLocation } from '../screens';
import BottomTabNavigatorAdvisor from './BottomTabNavigatorAdvisor';

const Stack = createStackNavigator();

const AdvisorNavigator = () => {
    const config = {
        animation: 'timing',
        config: {
            duration: 400,
            easing: Easing.linear,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config:{
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
            headerStyle:{
                backgroundColor: colors?.primaryColor,
            },
            headerTitleAlign: 'center',
            headerTintColor: "white",
            headerTitleStyle: { fontFamily:fonts?.PoppinsSemiBold },
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
   >
     <Stack.Screen name={ScreenConstants?.ADVISOR_BOTTOM_TAB_SCREEN} component={BottomTabNavigatorAdvisor}   options={{ headerShown: false, title: '' }} />
    <Stack.Screen name={ScreenConstants?.HOME_ADVISOR_SCREEN} component={HomeAdvisorScreen} options={{ headerShown: false, title: ''}}/>
    <Stack.Screen name={ScreenConstants?.PROFILE_SCREEN} component={ProfileScreen} options={{ headerShown: false, title: ''}}/>
    <Stack.Screen name={ScreenConstants?.LOAN_SCREEN} component={LoanScreen} options={{ headerShown: false, title: ''}}/>
    <Stack.Screen name={ScreenConstants?.KYC_SCREEN} component={KycScreen} options={{ headerShown: false, title: ''}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_PROFILE_SCREEN} component={AdvisorProfile} options={{ headerShown: true, title: 'My Profile'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_MPIN_SCREEN} component={AdvisorMpinScreen} options={{ headerShown: true, title: 'Change MPIN'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_LOCATION_SCREEN} component={UploadLocation} options={{ headerShown: true, title: 'Upload Location'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_LOCATION_VIEW_SCREEN} component={LocationView} options={{ headerShown: true, title: 'Upload Location'}}/>
   </Stack.Navigator>
  );
};

export default AdvisorNavigator