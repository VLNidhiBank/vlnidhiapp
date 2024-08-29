import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { height, width } from '../../../res/string';
import { colors } from '../../../res/color';
import fonts from '../../../res/fonts';
import { ScrollView } from 'react-native-gesture-handler';

const StepFour = () => {
    const [amount, setAmount] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const [maturityAmount, setMaturityAmount] = useState('');
    const [misInterest, setMisInterest] = useState('');

    const handleCalculate = () => {
        // Convert amount to number for calculation
        const enteredAmount = parseFloat(amount);

        if (isNaN(enteredAmount)) {
            alert('Please enter a valid amount');
            return;
        }

        // Perform your calculation logic here
        // Example: Adding entered amount to deposit amount, maturity amount, and mis interest

        setDepositAmount((prevAmount) => (parseFloat(prevAmount) || 0) + enteredAmount);
        setMaturityAmount((prevAmount) => (parseFloat(prevAmount) || 0) + enteredAmount * 1.1); // Example calculation
        setMisInterest((prevAmount) => (parseFloat(prevAmount) || 0) + enteredAmount * 0.05); // Example calculation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amount Details</Text>
            <ScrollView>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Amount</Text>
                    <View style={styles.amountContent}>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType='numeric'
                        />
                        <TouchableOpacity style={styles.goButton} onPress={handleCalculate}>
                            <Text style={styles.goButtonText}>Go</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Deposit Amount</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder=''
                        value={depositAmount.toString()}
                        editable={false}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Maturity Amount</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder=''
                        value={maturityAmount.toString()}
                        editable={false}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>MIS Interest</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder=''
                        value={misInterest.toString()}
                        editable={false}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default StepFour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.white,
        borderRadius: 20,
        paddingVertical: width / 20,
        paddingHorizontal: width / 20,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
        marginBottom: width / 20,
    },
    fieldContainer: {
        marginBottom: width / 20,
    },
    label: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.black,
        marginBottom: 5,
    },
    amountContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: '60%',
        borderRadius: 10,
        paddingHorizontal: width / 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
    },
    goButton: {
        width: width * 0.3,
        height: height / 15,
        backgroundColor: colors?.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    goButtonText: {
        color: colors?.white,
        fontSize: 14,
        fontFamily: fonts?.PoppinsBold,
    },
    input1: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: width / 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        color:colors?.black
    },
});
