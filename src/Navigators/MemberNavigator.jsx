import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { Easing } from 'react-native';
import ScreenConstants from './ScreenConstants';
import { colors } from '../res/color';
import fonts from '../res/fonts';
import { AccountScreen, BiometricScreen, ChangeMpinScreen, ContactUsScreen, HomeMemberScreen ,MemberProfileScreen, MyProfileScreen, PoliciesScreen, RenewalScreen, NewInvestment, ApplyLoanScreen, MemberSummaryScreen, UtilityBillPaymentScreen, CalculatorScreen, PolicyCalculator, PolicyCalculatorScreen, LoanCalculatorScreen, VirtualAccountScreen, NeftScreen, AddBeneficiaryScreen, IntraTransferScreen, DailyStatementScreen, RecurringStatementScreen, AnyAmountScreen, SavingStatementScreen, FDStatementScreen, LoanStatementScreen, ImpsTransferScreen, TransactionHistoryScreen} from '../screens';
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
            <Stack.Screen name={ScreenConstants?.NEW_INVESTMENT_SCREEN} component={NewInvestment}   options={{ headerShown: true, title: 'New Investment' }} />
            <Stack.Screen name={ScreenConstants?.BIOMETRIC_SCREEN} component={BiometricScreen}   options={{ headerShown: true, title: 'Biometric' }} />
            <Stack.Screen name={ScreenConstants?.CONTACTUS_SCREEN} component={ContactUsScreen}   options={{ headerShown: true, title: 'Contact Us' }} />
            <Stack.Screen name={ScreenConstants?.POLICIES_SCREEN} component={PoliciesScreen}   options={{ headerShown: true, title: 'Policies' }} />
            <Stack.Screen name={ScreenConstants?.CHANGEMPIN_SCREEN} component={ChangeMpinScreen}   options={{ headerShown: true, title: 'Change MPIN' }} />
            <Stack.Screen name={ScreenConstants?.RENEWAL_SCREEN} component={RenewalScreen}   options={{ headerShown: true, title: 'Renewals' }} />
            <Stack.Screen name={ScreenConstants?.ACCOUNT_SCREEN} component={AccountScreen}   options={{ headerShown: true, title: 'All Account Statement' }} />
            <Stack.Screen name={ScreenConstants?.APPLYLOAN_SCREEN} component={ApplyLoanScreen}   options={{ headerShown: false, title: '' }} />
            <Stack.Screen name={ScreenConstants?.MEMBERSUMMARY_SCREEN} component={MemberSummaryScreen}   options={{ headerShown: true, title: 'Member summary' }} />
            <Stack.Screen name={ScreenConstants?.UTILITYBILLPAYMENT_SCREEN} component={UtilityBillPaymentScreen}   options={{ headerShown: true, title: 'Utility Bill payment' }} />
            <Stack.Screen name={ScreenConstants?.CALCULATOR_SCREEN} component={CalculatorScreen}   options={{ headerShown: true, title: 'Calculator' }} />
            <Stack.Screen name={ScreenConstants?.POLICYCALCULATOR_SCREEN} component={PolicyCalculatorScreen}   options={{ headerShown: true, title: 'Policy Calculator' }} />
            <Stack.Screen name={ScreenConstants?.LOANCALCULATOR_SCREEN} component={LoanCalculatorScreen}   options={{ headerShown: true, title: 'Loan Calculator' }} />
            <Stack.Screen name={ScreenConstants?.VIRTUALACCOUNT_SCREEN} component={VirtualAccountScreen}   options={{ headerShown: true, title: 'Virtual Account' }} />
            <Stack.Screen name={ScreenConstants?.NEFT_SCREEN} component={NeftScreen}   options={{ headerShown: true, title: 'NEFT/IMPS' }} />
            <Stack.Screen name={ScreenConstants?.ADDBENEFICIARY_SCREEN} component={AddBeneficiaryScreen}   options={{ headerShown: true, title: 'Add Beneficiary' }} />
            <Stack.Screen name={ScreenConstants?.INTRATRANSFER_SCREEN} component={IntraTransferScreen}   options={{ headerShown: true, title: 'Intra Transfer' }} />
            <Stack.Screen name={ScreenConstants?.DAILYSTATEMENT_SCREEN} component={DailyStatementScreen}   options={{ headerShown: true, title: 'Daily Statement' }} />
            <Stack.Screen name={ScreenConstants?.RECURRINGSTATEMENT_SCREEN} component={RecurringStatementScreen}   options={{ headerShown: true, title: 'Recurring Statement' }} />
            <Stack.Screen name={ScreenConstants?.ANYAMOUNT_SCREEN} component={AnyAmountScreen}   options={{ headerShown: true, title: 'Any Amount' }} />
            <Stack.Screen name={ScreenConstants?.SAVINGSTATEMENT_SCREEN} component={SavingStatementScreen}   options={{ headerShown: true, title: 'Saving Statement' }} />
            <Stack.Screen name={ScreenConstants?.FDSTATEMENT_SCREEN} component={FDStatementScreen}   options={{ headerShown: true, title: 'FD Statement' }} />
            <Stack.Screen name={ScreenConstants?.LOANSTATEMENT_SCREEN} component={LoanStatementScreen}   options={{ headerShown: true, title: 'Loan Statement' }} />
            <Stack.Screen name={ScreenConstants?.IMPSTRANSFER_SCREEN} component={ImpsTransferScreen}   options={{ headerShown: true, title: 'IMPS Transfer' }} />
            <Stack.Screen name={ScreenConstants?.TRANSACTION_MEMBER_SCREEN} component={TransactionHistoryScreen}   options={{ headerShown: true, title: 'Transaction History' }} />
        </Stack.Navigator>
    );
};
export default MemberNavigator;
