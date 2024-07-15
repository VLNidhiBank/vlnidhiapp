import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { height, width } from '../../../res/string'
import { colors } from '../../../res/color'
import fonts from '../../../res/fonts'
import { ScrollView } from 'react-native-gesture-handler'

const StepFive = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payment Details</Text>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.label}>Pay Mode</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>SB Account</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Balance</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Remark</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
            </ScrollView>
        </View>
    )
}

export default StepFive

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
        // marginBottom: width / 20,
    },
    content: {
        paddingVertical: width / 30,
        // paddingHorizontal: width / 20,
    },
    label: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.black,
    },
    input: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: width / 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        marginTop: 5,
    },
});