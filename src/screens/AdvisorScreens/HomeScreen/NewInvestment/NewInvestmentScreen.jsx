import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color'
import { width } from '../../../../res/string'
import CustomTextInput from '../../../../component/CustomTextInput'
import CustomButton from '../../../../component/CustomButton'
import fonts from '../../../../res/fonts'
import { useNavigation } from '@react-navigation/native'
import ScreenConstants from '../../../../Navigators/ScreenConstants'
import { Dropdown } from 'react-native-element-dropdown'



const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const NewInvestmentScreen = () => {
    const navigation = useNavigation();

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    const [branchCode, setBranchCode] = useState("");
    const [branchName, setBranchName] = useState("");

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
                <CustomTextInput inputData={BranchCode} />
                <CustomTextInput inputData={BranchName} />
                <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular, color:colors?.black}}>Select Member</Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Member' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <CustomButton buttonTitle={"Search"} onPress={() => { navigation.navigate(ScreenConstants?.ADVISOR_NEW_INVESTMENT_DETAILS_SCREEN) }} />
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
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
