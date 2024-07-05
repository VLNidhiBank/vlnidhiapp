import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import ScreenConstants from './ScreenConstants';
import { OnBoarding, SignIn, UserType } from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => {
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
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}
        >
            <Stack.Screen name={ScreenConstants?.ON_BOARDING_SCREEN} component={OnBoarding} />
            <Stack.Screen name={ScreenConstants?.USER_TYPE_SCREEN} component={UserType} />
            <Stack.Screen name={ScreenConstants?.SIGN_IN_SCREEN} component={SignIn} />
        </Stack.Navigator>
    );
};
export default AuthNavigation;
