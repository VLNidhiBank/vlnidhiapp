import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color'
import { width } from '../../../../res/string'
import CustomTextInput from '../../../../component/CustomTextInput'
import CustomButton from '../../../../component/CustomButton'
import fonts from '../../../../res/fonts'

const NewInvestmentScreen = () => {
    const [ branchCode, setBranchCode ] = useState("");
    const [ branchName, setBranchName ] = useState("");

    const BranchCode = {
        title: 'Branch Code',
        // palceHolderText: 'Select Loan ID',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: branchCode,
        actionSecond: () => setBranchCode(!branchCode),
        isId: branchCode,
      };
    const BranchName = {
        title: 'Branch Name',
        // palceHolderText: 'Select Loan ID',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: branchName,
        actionSecond: () => setBranchName(!branchName),
        isId: branchName,
      };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <CustomTextInput inputData={BranchCode}/>
                <CustomTextInput inputData={BranchName}/>
                <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular, color:colors?.black}}>Select Member</Text>
                <CustomButton buttonTitle={"Search"}/>
            </View>
        </View>
    )
}

export default NewInvestmentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        borderRadius: 10,
        backgroundColor: colors?.white,
        margin: "2%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
    }
});
