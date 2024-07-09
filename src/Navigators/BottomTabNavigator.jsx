/* eslint-disable prettier/prettier */
import { View, Text, Easing } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const CustomerBottomTab = () => {


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


    function HomeStack() {

        return (
            <>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal',
                        transitionSpec: {
                            open: config,
                            close: closeConfig,
                        },
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name={NavigationStrings.CUSTOMER_HOME} component={CustomerHome} />
                    <Stack.Screen name={NavigationStrings.MAIN_CAT_PAGE} component={MainCatPage} />
                </Stack.Navigator>
            </>

        );
    }

    const InquiryStack = () => {

        return (
            <>
                <Stack.Navigator
                    initialRouteName={NavigationStrings.CUSTOMER_INQUIRY}
                    screenOptions={{
                        headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal',
                        transitionSpec: {
                            open: config,
                            close: closeConfig,
                        },
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}>
                    <Stack.Screen name={NavigationStrings.CUSTOMER_INQUIRY} component={CustInquiry} />
                    <Stack.Screen name={NavigationStrings.INQUIRY_SUPPORT} component={InquirySupport} />
                </Stack.Navigator>
            </>

        );
    };




    return (
        <Tab.Navigator screenOptions={{ tabBarLabel: () => { return null; }, headerShown: false, tabBarStyle: styles.tabStyle }} >
            <Tab.Screen name={NavigationStrings.CUSTOMER_HOME} component={CustomerHome}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.TotalWrap} >
                                <BottomActiveHome_Icon width={windowHeight / 20} height={windowWidth / 20} />
                                <Text style={styles.ActiveText} >Home</Text>
                            </View>
                            :
                            <View style={styles.TotalWrap} >
                                <BottomHome_Icon width={windowHeight / 20} height={windowWidth / 20} />
                                <Text style={styles.InActiveText} >Home</Text>
                            </View>
                    ),
                }} />
            <Tab.Screen name={NavigationStrings.CUSTOMER_INQUIRY} component={CustInquiry}
                options={{
                    tabBarLabel: () => { return null; },
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.TotalWrap} >
                                <BottomActiveInquiry_Icon width={windowHeight / 20} height={windowWidth / 20} />
                                <Text style={styles.ActiveText} >Inquiry</Text>
                            </View>
                            :
                            <View style={styles.TotalWrap} >
                                <BottomInquiry_Icon width={windowHeight / 20} height={windowWidth / 20} />
                                <Text style={styles.InActiveText} >Inquiry</Text>
                            </View>
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.CUST_INVOICES_TAB} component={CustInvoicesTab} options={{
                tabBarLabel: () => { return null; },
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.TotalWrap} >
                            <BottomActiveInvoices_Icon width={windowHeight / 20} height={windowWidth / 20} />
                            <Text style={styles.ActiveText} >Invoices</Text>
                        </View>
                        :
                        <View style={styles.TotalWrap} >
                            <BottomInVoices_Icon width={windowHeight / 20} height={windowWidth / 20} />
                            <Text style={styles.InActiveText} >Invoices</Text>
                        </View>
                ),
            }} />
            <Tab.Screen name={NavigationStrings.CUSTOMER_PROFILE_SCREEN} component={CustProfile} options={{
                tabBarLabel: () => { return null; },
                tabBarIcon: ({ focused }) => (
                    focused ?
                        <View style={styles.TotalWrap} >
                            <BottomActiveProfile_Icon width={windowHeight / 20} height={windowWidth / 20} />
                            <Text style={styles.ActiveText} >Profile</Text>
                        </View>
                        :
                        <View style={styles.TotalWrap} >
                            <ProfileCust_Icon width={windowHeight / 20} height={windowWidth / 20} />
                            <Text style={styles.InActiveText} >Profile</Text>
                        </View>
                ),
            }} />
        </Tab.Navigator>

    );
};



export default CustomerBottomTab;



const styles = StyleSheet.create({
    tabStyle: {
        height: windowHeight / 12,
        backgroundColor: colors.whiteColor,
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
        color: colors.AnotherSecondaryColor,
        fontFamily: fonts.PoppinsBold,
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
