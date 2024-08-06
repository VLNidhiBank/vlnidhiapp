import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import { BackBlack_Icon, BankStat_Icon, EditStat_Icon, ReceiptStat_Icon, RecurringStat_Icon, RewenalStat_Icon } from '../../../../res/icons'
import fonts from '../../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'
import ScreenConstants from '../../../../Navigators/ScreenConstants'

const AllAccountStatementScreen = ({navigation}) => {

    const Information = [
        { id: 1, icon: RewenalStat_Icon, title: "Daily Statement", Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_DAILY_STATEMENT_SCREEN), },
        { id: 2, icon: RecurringStat_Icon, title: "Recurring Statement",  Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_RECURRING_STATEMENT_SCREEN), },
        { id: 3, icon: EditStat_Icon, title: "Any Amount",  Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_ALL_AMOUNT_STATEMENT_SCREEN), },
        { id: 4, icon: RewenalStat_Icon, title: "Saving Statement",  Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_SAVING_STATEMENT_SCREEN),},
        { id: 5, icon: BankStat_Icon, title: "FD Statement",  Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_FD_STATEMENT_SCREEN), },
        { id: 6, icon: ReceiptStat_Icon, title: "Loan Statement",  Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_LOAN_STATEMENT_SCREEN), },
    ]
    const Data = ({ item }) => {
        return (
            <>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                    <Pressable style={{ flexDirection: "row", alignItems: "center", width: '70%', paddingVertical: width / 40 }} onPress={item?.Navigation}>
                        <item.icon height={height / 20} width={width / 14} />
                        <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black, marginHorizontal: 20 }}>{item.title}</Text>
                    </Pressable>
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

export default AllAccountStatementScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        backgroundColor: colors?.white,
        borderRadius: 15,
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