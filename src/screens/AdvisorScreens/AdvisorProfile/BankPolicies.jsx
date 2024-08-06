import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import { CallIcon_Icon, Info_Icon, Privacy_Icon, Refund_Icon, VLBank_Icon } from '../../../res/icons'
import { FlatList } from 'react-native-gesture-handler'
import fonts from '../../../res/fonts'

const BankPolicies = () => {
    const Information = [
        { id: 1, icon: VLBank_Icon, title: "About VLBank" },
        { id: 2, icon: Privacy_Icon, title: "Privacy Policy" },
        { id: 3, icon: Refund_Icon, title: "Refund & Cancellation Policy" },
        { id: 4, icon: Info_Icon, title: "Terms and Conditions" },
    ]
    const Data = ({ item }) => {
        return (
            <>
                <View style={{ flexDirection: "row", width: width * 0.8, alignItems: "center",paddingVertical: width / 30, }}>
                    <item.icon height={height / 20} width={width / 14} />
                    <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black, marginHorizontal: 20 }}>{item.title}</Text>
                </View>
                <View style={styles.separator} />
            </>
        )
    }
  return (
    <View style={styles.container}>
        <View style={styles.content}>
                <FlatList
                    data={Information}
                    style={styles.flatlistStyles}
                    renderItem={({ item }) => {
                        return (
                            <Data item={item} />
                        )
                    }}
                />
            </View>
    </View>
  )
}

export default BankPolicies

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 20,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 15,
        paddingVertical: width / 30,
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '15%',
        marginRight: "5%"
    },
});