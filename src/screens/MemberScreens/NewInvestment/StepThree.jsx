import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { height, width } from '../../../res/string'
import { colors } from '../../../res/color'
import fonts from '../../../res/fonts'
import { ScrollView } from 'react-native-gesture-handler'

const StepThree = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plan Details</Text>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.label}>Scheme Type</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Scheme Name</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Term</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Mode</Text>
                    <TextInput style={styles.input} placeholder='' />
                </View>
            </ScrollView>
        </View>
    )
}

export default StepThree

const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        height: height / 2,
        backgroundColor: colors?.white,
        borderRadius: 20,
        alignSelf: "center",
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