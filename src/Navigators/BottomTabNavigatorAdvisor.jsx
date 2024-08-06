/* eslint-disable prettier/prettier */
import { View, Text, Easing } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { HomeBottomActive_Icon, HomeBottomInactive_Icon, LoanBottomActive_Icon, LoanBottomInActive_Icon, ProfileBottomActive_Icon, ProfileBottomInactive_Icon, Send_Icon, StatusUp_Icon, TransactionBottomActive_Icon, TransactionBottomInactive_Icon } from '../res/icons';
import { colors } from '../res/color';
import { height, width } from '../res/string';
import fonts from '../res/fonts';
import { ApplyLoanScreen, HomeAdvisorScreen, HomeMemberScreen, KycScreen, LoanScreen, MemberProfileScreen, ProfileScreen, TransactionHistoryScreen } from '../screens';
import ScreenConstants from './ScreenConstants';

const BottomTabNavigatorAdvisor = () => {


    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();


    const config = {
        animation: 'timing',
        config: {
            duration: 250,
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
        <Tab.Navigator screenOptions={{ tabBarLabel: () => { return null; }, headerShown: false, tabBarStyle: styles.tabStyle }} >
            <Tab.Screen name={ScreenConstants?.HOME_ADVISOR_SCREEN} component={HomeAdvisorScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.TotalWrap} >
                                <HomeBottomActive_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.ActiveText} >Home</Text>
                            </View>
                            :
                            <View style={styles.TotalWrap} >
                                <HomeBottomInactive_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.InActiveText} >Home</Text>
                            </View>
                    ),
                }} />
            <Tab.Screen name={ScreenConstants.KYC_SCREEN} component={KycScreen}
                options={{
                    tabBarLabel: () => { return null; },
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.TotalWrap} >
                                <StatusUp_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.ActiveText} >Collection</Text>
                            </View>
                            :
                            <View style={styles.TotalWrap} >
                                <StatusUp_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.InActiveText} >Collection</Text>
                            </View>
                    ),
                }}
            />
            <Tab.Screen name={ScreenConstants.LOAN_SCREEN} component={LoanScreen} options={{
                tabBarLabel: () => { return null; },
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.TotalWrap} >
                            <Send_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.ActiveText} >KYC</Text>
                        </View>
                        :
                        <View style={styles.TotalWrap} >
                            <Send_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.InActiveText} >KYC</Text>
                        </View>
                ),
            }} />
            <Tab.Screen name={ScreenConstants.PROFILE_SCREEN} component={ProfileScreen} options={{
                tabBarLabel: () => { return null; },
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.TotalWrap} >
                            <ProfileBottomActive_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.ActiveText} >Profile</Text>
                        </View>
                        :
                        <View style={styles.TotalWrap} >
                            <ProfileBottomInactive_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.InActiveText} >Profile</Text>
                        </View>
                ),
            }} />
        </Tab.Navigator>

    );
};



export default BottomTabNavigatorAdvisor;



const styles = StyleSheet.create({
    tabStyle: {
        height: height / 12,
        backgroundColor: colors.white,
        borderTopWidth: 0,
        elevation: 0,
    },
    TotalWrap: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ActiveText: {
        height: '40%',
        width: '100%',
        textAlign: 'center',
        // backgroundColor: 'pink',
        color: colors.primaryColor,
        fontFamily: fonts.PoppinsSemiBold,
        fontSize: 10,
        lineHeight: 15,
        paddingTop: 5,
    },
    InActiveText: {
        // backgroundColor: 'skyblue',
        height: '40%',
        width: '100%',
        textAlign: 'center',
        color: colors.BottomTabGrey,
        fontFamily: fonts.PoppinsMedium,
        fontSize: 10,
        lineHeight: 15,
        paddingTop: 5,
    },
});
