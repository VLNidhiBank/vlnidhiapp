import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import { Amount_Icon, BackBlack_Icon, BankStat_Icon, Daily_Icon, EditStat_Icon, ReceiptStat_Icon, RecurringStat_Icon, Renewal_Icon, RewenalStat_Icon } from '../../../../res/icons'
import fonts from '../../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'

const AccountScreen = () => {

    const Information = [
        { id: 1, icon: RewenalStat_Icon, title: "Daily Statement" },
        { id: 2, icon: RecurringStat_Icon, title: "Recurring Statement" },
        { id: 3, icon: EditStat_Icon, title: "Any Amount" },
        { id: 4, icon: RewenalStat_Icon, title: "Saving Statement" },
        { id: 5, icon: BankStat_Icon, title: "FD Statement" },
        { id: 6, icon: ReceiptStat_Icon, title: "Loan Statement" },
    ]
    const Data = ({ item }) => {
        return (
            <>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: '70%', paddingVertical: width / 40 }}>
                        <item.icon height={height / 20} width={width / 14} />
                        <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black, marginHorizontal: 20 }}>{item.title}</Text>
                    </View>
                    <BackBlack_Icon height={height / 12} width={width / 14} style={{ alignSelf: 'flex-end' }} />
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

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 15,
        alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 20,
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '15%',
        marginRight: "5%"
    },
});