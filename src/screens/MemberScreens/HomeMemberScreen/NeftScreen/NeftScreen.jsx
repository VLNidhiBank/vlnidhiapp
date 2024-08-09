import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import { BackBlack_Icon, Loan_Icon } from '../../../../res/icons'
import ScreenConstants from '../../../../Navigators/ScreenConstants'
import fonts from '../../../../res/fonts'

const NeftScreen = ({navigation}) => {
    const Information = [
        { id: 1, icon: Loan_Icon, title: "Add Beneficiary", Navigation: () => navigation.navigate(ScreenConstants.ADDBENEFICIARY_SCREEN)},
        { id: 2, icon: Loan_Icon, title: "IMPS Transfer", Navigation: () => navigation.navigate(ScreenConstants.IMPSTRANSFER_SCREEN) },
        { id: 3, icon: Loan_Icon, title: "NEFT Transfer", Navigation: () => navigation.navigate(ScreenConstants.NEFT_TRANSFER_SCREEN) },
    ]
    const Data = ({ item }) => {
        return (
            <>
                <Pressable style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }} onPress={item?.Navigation}>
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

export default NeftScreen

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