import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import { width } from '../../../../../res/string'

const StepThree = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fees Details</Text>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.label}>Select Plan</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Pay Mode</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Opening Amount</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Remarks</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
            </ScrollView>
        </View>
    )
}

export default StepThree

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: width * 0.95,
        // height: height / 2,
        backgroundColor: colors?.white,
        borderRadius: 20,
        // alignSelf: "center",
        paddingVertical: width / 20,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
        paddingHorizontal: width / 20,
        marginBottom: width / 25,
    },
    content: {
        paddingVertical: width / 30,
        paddingHorizontal: width / 20,
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