import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../../../res/color';
import { width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';
import CustomTextInput from '../../../../../component/CustomTextInput';
import CustomButton from '../../../../../component/CustomButton';

const DailyStatementScreen = () => {
    const [memberName, setMemberName] = useState('');
    const [policyNo, setPolicyNo] = useState('');

    const data = [
        { id: '01', dueDate: '27/01/2024', payDate: '27/01/2024', amount: '100', balance: '200' },
        { id: '02', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '03', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '04', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '05', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '06', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Select Policy No.</Text>
                    <View style={styles.inputContainer}>
                        <CustomTextInput
                            title="Member Name"
                            placeholder="Enter your member name"
                            value={memberName}
                            onChangeText={setMemberName}
                        />
                        <CustomTextInput
                            title="Policy No"
                            placeholder="Enter your policy no"
                            value={policyNo}
                            onChangeText={setPolicyNo}
                        />
                    </View>
                    <CustomButton buttonTitle="Search" />
                </View>
                {data.map((item) => (
                    <View key={item.id} style={styles.history}>
                        <Text style={styles.id}>{item.id}</Text>
                        <View style={styles.dateContainer}>
                            <View>
                                <Text style={styles.label}>Due Date</Text>
                                <Text style={styles.value}>{item.dueDate}</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Pay Date</Text>
                                <Text style={styles.value}>{item.payDate}</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                        <View style={styles.amountContainer}>
                            <View>
                                <Text style={styles.label}>Amount</Text>
                                <Text style={styles.value}>{item.amount}</Text>
                            </View>
                            <View>
                                <Text style={styles.label}>Balance</Text>
                                <Text style={styles.value}>{item.balance}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default DailyStatementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    contentContainer: {
        paddingBottom: 20,
    },
    content: {
        backgroundColor: colors?.white,
        margin: '2%',
        borderRadius: 12,
        padding: '4%',
    },
    title: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
    },
    inputContainer: {
        paddingVertical: '1%',
    },
    history: {
        backgroundColor: colors?.white,
        margin: '2%',
        borderRadius: 20,
        padding: '4%',
    },
    id: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '4%',
    },
    label: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsLight,
    },
    value: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsRegular,
        color: colors?.black,
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginVertical: '2%',
    },
});
