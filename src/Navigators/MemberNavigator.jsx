import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import ScreenConstants from './ScreenConstants';
import { colors } from '../res/color';
import fonts from '../res/fonts';
import { HomeMemberScreen ,MemberProfileScreen} from '../screens';
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
                // headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
        >
            
            <Stack.Screen name={ScreenConstants?.MEMBER_BOTTOM_TAB} component={MemberBottomTab}   options={{ headerShown: false, title: '' }} />
            <Stack.Screen name={ScreenConstants?.MEMBER_PROFILE_SCREEN} component={MemberProfileScreen} options={{ headerShown: true, title: 'Profile',headerTitleStyle: { color: "white", fontFamily:fonts?.PoppinsSemiBold }, headerTintColor: "white", headerTitleAlign:"center"  }} />
            <Stack.Screen name={ScreenConstants?.HOME_MEMBER_SCREEN} component={HomeMemberScreen}   options={{ headerShown: false, title: '' }} />
        </Stack.Navigator>
    );
};
export default MemberNavigator;
