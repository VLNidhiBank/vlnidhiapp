import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../res/color'
import FormInput from '../../../component/Input/FormInput';

const StepOne = () => {

    const brannchData = {
        title: 'Branch Code',
        // palceHolderText: 'Password',
        // FirstIcon: Call_Icon,
        // inputValue: userId,
        changedText: (text) => setItemDetails(text),
    };
    return (
        <View style={styles?.StepOneCard} >
            <Text>Member Details</Text>
            <FormInput inputData={brannchData} />
        </View>
    )
}

export default StepOne


const styles = StyleSheet.create({
    StepOneCard: {
        backgroundColor: colors?.white,
        borderRadius: 10,
    }
})
