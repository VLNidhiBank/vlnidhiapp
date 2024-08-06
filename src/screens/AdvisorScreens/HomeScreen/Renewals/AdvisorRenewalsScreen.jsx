import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Amount_Icon, BackBlack_Icon, Daily_Icon, Renewal_Icon } from '../../../../res/icons'
import { height, width } from '../../../../res/string'
import fonts from '../../../../res/fonts'
import { colors } from '../../../../res/color'
import { useNavigation } from '@react-navigation/native'
import ScreenConstants from '../../../../Navigators/ScreenConstants'

const AdvisorRenewalScreen = () => {

    const navigation = useNavigation();

    const Information = [
        { id: 1, icon: Daily_Icon, title: "Daily Renewal", Navigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_DAILY_RENEWALS_SCREEN)} },
        { id: 2, icon: Renewal_Icon, title: "Recurring Renewal", Navigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_RECURRING_RENEWALS_SCREEN)} },
        { id: 3, icon: Amount_Icon, title: "Any Amount", Navigation: () => {navigation?.navigate(ScreenConstants?.ADVISOR_DAILY_RENEWALS_SCREEN)} },
    ]
    const Data = ({ item }) => {
        return (
            <>
                <Pressable style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }} onPress={() => { item?.Navigation() }}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: '70%', paddingVertical: width / 40 }}>
                        <item.icon height={height / 20} width={width / 14} />
                        <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black, marginHorizontal: 20 }}>{item.title}</Text>
                    </View>
                    <BackBlack_Icon height={height / 12} width={width / 14} style={{ alignSelf: 'flex-end' }} />
                </Pressable>
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

export default AdvisorRenewalScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 15,
        // alignSelf: "center",
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