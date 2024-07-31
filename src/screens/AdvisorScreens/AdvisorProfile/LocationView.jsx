import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { width } from '../../../res/string'

const LocationView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>LocationView</Text>
            </View>
        </View>
    )
}

export default LocationView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        borderRadius: 10,
        margin: "2%",
        backgroundColor: colors?.white,
        paddingHorizontal: width / 20,
        paddingHorizontal: width / 20,
    }
});