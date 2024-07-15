import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import fonts from '../../../../res/fonts'
import { Amount_Icon, BackBlack_Icon, Bill_Icon, Daily_Icon, Dth_Icon, Mobile_Icon, Renewal_Icon } from '../../../../res/icons'

const UtilityBillPaymentScreen = () => {
  const Information = [
    { id: 1, icon: Mobile_Icon, title: "Mobile Recharge" },
    { id: 2, icon: Dth_Icon, title: "DTH Recharge" },
    { id: 3, icon: Bill_Icon, title: "Electric Bill Pay" },
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

export default UtilityBillPaymentScreen

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