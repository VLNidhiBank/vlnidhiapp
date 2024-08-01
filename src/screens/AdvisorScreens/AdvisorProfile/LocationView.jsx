import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import fonts from '../../../res/fonts'
import CustomTextInput from '../../../component/CustomTextInput'
import { Travel_Icon } from '../../../res/icons'
import CustomButton from '../../../component/CustomButton'

const LocationView = () => {
    const [ loanId, setLoanId ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');



    const LoanId = {
        title: 'Select Loan ID',
        // palceHolderText: 'Select Loan ID',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: loanId,
        actionSecond: () => setLoanId(!loanId),
        isId: loanId,
      };
    const Latitude = {
        title: 'Latitude',
        // palceHolderText: 'Latitude',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: latitude,
        actionSecond: () => setLatitude(!latitude),
        isLatitude: latitude,
      };
    const Longitude = {
        title: 'Longitude',
        // palceHolderText: 'Latitude',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: longitude,
        actionSecond: () => setLongitude(!longitude),
        isLongitude: longitude,
      };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{fontSize:18, fontFamily:fonts?.PoppinsMedium, color:colors?.black, paddingVertical:width/20}}>Location</Text>
                <View>
                    <CustomTextInput inputData={LoanId} />
                    <CustomTextInput inputData={Latitude} />
                    <CustomTextInput inputData={Longitude} />
                </View>
                <View style={{alignItems:"center"}}>
                <Travel_Icon width={width / 2} height={height / 5} />
                </View>
                <CustomButton buttonTitle={"Go To Location"}/>
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
    }
});