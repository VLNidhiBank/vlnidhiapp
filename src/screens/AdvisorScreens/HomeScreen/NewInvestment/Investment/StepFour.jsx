import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { colors } from '../../../../../res/color';
import { height, width } from '../../../../../res/string';
import fonts from '../../../../../res/fonts';


const StepFour = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amount Details</Text>
            <ScrollView>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Amount</Text>
                <View style={styles.amountContent}>
                    <TextInput style={styles.input} placeholder='' />
                    <View style={styles.goButton}>
                        <Text style={styles.goButtonText}>Go</Text>
                    </View>
                </View>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Deposit Amount</Text>
                <TextInput style={styles.input1} placeholder='' />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Maturity Amount</Text>
                <TextInput style={styles.input1} placeholder='' />
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>MIS Interest</Text>
                <TextInput style={styles.input1} placeholder='' />
            </View>
            </ScrollView>
        </View>
    );
}

export default StepFour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: width * 0.95,
        // height: height / 2,
        backgroundColor: colors?.white,
        borderRadius: 20,
        // alignSelf: "center",
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
    },
});
