import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { height, width } from '../../../../res/string'
import fonts from '../../../../res/fonts'
import { colors } from '../../../../res/color'
import { BackBlack_Icon, Balance_Icon, Bill_Icon, Description_Icon, Dth_Icon, Loan_Icon, Mobile_Icon, Receipt_Icon } from '../../../../res/icons'
import { FlatList } from 'react-native-gesture-handler'
import ScreenConstants from '../../../../Navigators/ScreenConstants'

const SavingAccountScreen = ({navigation}) => {
  const Information = [
    { id: 1, icon: Balance_Icon, title: "New Savings Account", Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_NEW_SAVING_ACCOUNT_SCREEN)},
    { id: 2, icon: Receipt_Icon, title: "Savings Transaction", Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_SAVING_TRANSACTION_SCREEN) },
    { id: 3, icon: Description_Icon, title: "Mini Statement", Navigation: () => navigation.navigate(ScreenConstants.ADVISOR_MINI_STATEMENT_SCREEN) },
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

export default SavingAccountScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin:"2%",
    //   width: width * 0.95,
      backgroundColor: colors?.white,
      borderRadius: 15,
    //   alignSelf: "center",
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