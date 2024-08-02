import { View, Text, Easing, Platform } from 'react-native'
import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { colors } from '../res/color';
import fonts from '../res/fonts';
import ScreenConstants from './ScreenConstants';
import { AddNewMemberScreen, AdvisorAmountStatementScreen, AdvisorCalcultorScreen, AdvisorDailystatementScreen, AdvisorFDStatementScreen, AdvisorIncentiveScreen, AdvisorLoanStatementScreen, AdvisorMemberDetailsScreen, AdvisorMpinScreen, AdvisorMyTeamScreen, AdvisorProfile, AdvisorRecurringStatementScreen, AdvisorRenewalsScreen, AdvisorSavingHistoryScreen, AdvisorSavingStatementScreen, AdvisorSavingTransactionScreen, AdvisorTeamDetails, AllAccountStatementScreen, BankPlicies, Biometric, ContactUs, DailyRenewalScreen, HomeAdvisorScreen, KycScreen, LoanScreen, LocationView, MiniStatementScreen, NewInvestmentScreen, NewSavingAccountScreen, ProfileScreen, RecurringRenewalScreen, RenewalScreen, SavingAccountScreen, UploadLocation } from '../screens';
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
    <Stack.Screen name={ScreenConstants?.ADVISOR_LOCATION_VIEW_SCREEN} component={LocationView} options={{ headerShown: true, title: 'Location View'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_BIOMETRIC_SCREEN} component={Biometric} options={{ headerShown: true, title: 'Biometric'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_CONTACTUS_SCREEN} component={ContactUs} options={{ headerShown: true, title: 'Contact Us'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_BANKPOLICIES_SCREEN} component={BankPlicies} options={{ headerShown: true, title: 'About Us'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_SAVING_ACCOUNT_SCREEN} component={SavingAccountScreen} options={{ headerShown: true, title: 'Savings Account'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_NEW_SAVING_ACCOUNT_SCREEN} component={NewSavingAccountScreen} options={{ headerShown: true, title: 'New Savings Account'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_MINI_STATEMENT_SCREEN} component={MiniStatementScreen} options={{ headerShown: true, title: 'Mini Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_ADD_NEW_MEMBER_SCREEN} component={AddNewMemberScreen} options={{ headerShown: true, title: 'New Member'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_NEW_INVESTMENT_SCREEN} component={NewInvestmentScreen} options={{ headerShown: true, title: 'New Investment'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_RENEWALS_SCREEN} component={AdvisorRenewalsScreen} options={{ headerShown: true, title: 'Renewals'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_DAILY_RENEWALS_SCREEN} component={DailyRenewalScreen} options={{ headerShown: true, title: 'Daily Renewal'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_RECURRING_RENEWALS_SCREEN} component={RecurringRenewalScreen} options={{ headerShown: true, title: 'Recurring Renewal'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_ALL_ACCOUNT_STATEMENT_SCREEN} component={AllAccountStatementScreen} options={{ headerShown: true, title: 'All Account Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_DAILY_STATEMENT_SCREEN} component={AdvisorDailystatementScreen} options={{ headerShown: true, title: 'Daily Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_RECURRING_STATEMENT_SCREEN} component={AdvisorRecurringStatementScreen} options={{ headerShown: true, title: 'Recurring Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_ALL_AMOUNT_STATEMENT_SCREEN} component={AdvisorAmountStatementScreen} options={{ headerShown: true, title: 'Any Amount Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_SAVING_STATEMENT_SCREEN} component={AdvisorSavingStatementScreen} options={{ headerShown: true, title: 'Saving Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_FD_STATEMENT_SCREEN} component={AdvisorFDStatementScreen} options={{ headerShown: true, title: 'FD Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_LOAN_STATEMENT_SCREEN} component={AdvisorLoanStatementScreen} options={{ headerShown: true, title: 'Loan Statement'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_MEMBER_DETAILS_SCREEN} component={AdvisorMemberDetailsScreen} options={{ headerShown: true, title: 'Member Details'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_MY_INCENTIVE_SCREEN} component={AdvisorIncentiveScreen} options={{ headerShown: true, title: 'My Incentive'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_MY_TEAM_SCREEN} component={AdvisorMyTeamScreen} options={{ headerShown: true, title: 'My Team'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_TEAM_DETAILS_SCREEN} component={AdvisorTeamDetails} options={{ headerShown: true, title: 'Team Details'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_CALCULTOR_SCREEN} component={AdvisorCalcultorScreen} options={{ headerShown: true, title: 'Calcultor'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_SAVING_TRANSACTION_SCREEN} component={AdvisorSavingTransactionScreen} options={{ headerShown: true, title: 'Saving Transaction'}}/>
    <Stack.Screen name={ScreenConstants?.ADVISOR_SAVING_HISTORY_SCREEN} component={AdvisorSavingHistoryScreen} options={{ headerShown: true, title: 'Saving Transaction'}}/>
   </Stack.Navigator>
  );
};

export default AdvisorNavigator