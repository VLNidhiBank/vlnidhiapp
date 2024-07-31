import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../../res/color'
import { width } from '../../../../../res/string'
import fonts from '../../../../../res/fonts'
import CustomTextInput from '../../../../../component/CustomTextInput'
import { User_Icon } from '../../../../../res/icons'
import CustomButton from '../../../../../component/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'

const LoanStatementScreen = () => {
    const [userId, setUserId] = useState('');


    const data = [
        { id: '01', dueDate: '27/01/2024', payDate: '27/01/2024', amount: '100', balance: '200' },
        { id: '02', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '03', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '04', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '05', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
        { id: '06', dueDate: '28/01/2024', payDate: '28/01/2024', amount: '150', balance: '250' },
      ];



    const memberNameData = {
        title: 'Select Policy Name',
        palceHolderText: 'Enter your policy name',
        inputValue: userId,
        changedText: (text) => setUserId(text),
    };
    const policyNoData = {
        title: 'Policy No',
        palceHolderText: 'Enter your policy no',
        inputValue: userId,
        changedText: (text) => setUserId(text),
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Select Policy No.</Text>
                <View style={styles.content1}>
                    <CustomTextInput inputData={memberNameData} />
                    <CustomTextInput inputData={policyNoData} />
                </View>
                <CustomButton buttonTitle={"Search"} />
            </View>
           <ScrollView>
      {data.map((item, index) => (
        <View key={index} style={styles.history}>
          <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>{item.id}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}>Due Date</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{item.dueDate}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}>Pay Date</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{item.payDate}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}>Amount</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{item.amount}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}>Balance</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>{item.balance}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
        </View>
    )
}

export default LoanStatementScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        backgroundColor: colors?.white,
        margin: "2%",
        borderRadius: 12,
        padding: "4%"
    },
    content1: {
        padding: "1%"
    },
    history: {
        backgroundColor: colors?.white,
        margin: "2%",
        borderRadius: 20,
        padding: "4%"
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '1%',
    },
});