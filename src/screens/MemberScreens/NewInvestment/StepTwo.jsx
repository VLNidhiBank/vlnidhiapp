import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { height, width } from '../../../res/string'
import { colors } from '../../../res/color'
import fonts from '../../../res/fonts'

const StepTwo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nominee Details</Text>
            <View style={styles.content}>
                <Text style={styles.label}>Nominee Details</Text>
                <TextInput style={styles.input} placeholder='' />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Nominee Age</Text>
                <TextInput style={styles.input} placeholder='' />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Nominee Relation</Text>
                <TextInput style={styles.input} placeholder='' />
            </View>
        </View>
    )
}

export default StepTwo

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