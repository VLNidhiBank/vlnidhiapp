/* eslint-disable prettier/prettier */
import { View, Text, Easing } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBottomActive_Icon, HomeBottomInactive_Icon, LoanBottomActive_Icon, LoanBottomInActive_Icon, ProfileBottomActive_Icon, ProfileBottomInactive_Icon, TransactionBottomActive_Icon, TransactionBottomInactive_Icon } from '../res/icons';
import { colors } from '../res/color';
import { height, width } from '../res/string';
import fonts from '../res/fonts';
import { ApplyLoanScreen, HomeMemberScreen, MemberProfileScreen, TransactionHistoryScreen } from '../screens';
import ScreenConstants from './ScreenConstants';

const MemberBottomTab = () => {


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
            <Tab.Screen name={ScreenConstants?.HOME_MEMBER_SCREEN} component={HomeMemberScreen}
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
            <Tab.Screen name={ScreenConstants.APPLYLOAN_SCREEN} component={ApplyLoanScreen}
                options={{
                    tabBarLabel: () => { return null; },
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.TotalWrap} >
                                <LoanBottomActive_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.ActiveText} >Loan</Text>
                            </View>
                            :
                            <View style={styles.TotalWrap} >
                                <LoanBottomInActive_Icon width={height / 20} height={width / 20} />
                                <Text style={styles.InActiveText} >Loan</Text>
                            </View>
                    ),
                }}
            />
            <Tab.Screen name={ScreenConstants.TRANSACTION_MEMBER_SCREEN} component={TransactionHistoryScreen} options={{
                tabBarLabel: () => { return null; },
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.TotalWrap} >
                            <TransactionBottomActive_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.ActiveText} >Transaction</Text>
                        </View>
                        :
                        <View style={styles.TotalWrap} >
                            <TransactionBottomInactive_Icon width={height / 20} height={width / 20} />
                            <Text style={styles.InActiveText} >Transaction</Text>
                        </View>
                ),
            }} />
            <Tab.Screen name={ScreenConstants.MEMBER_PROFILE_SCREEN} component={MemberProfileScreen} options={{
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



export default MemberBottomTab;



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
