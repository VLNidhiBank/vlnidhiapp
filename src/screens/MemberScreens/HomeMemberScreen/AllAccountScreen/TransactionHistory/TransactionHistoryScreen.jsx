import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import { width } from '../../../../../res/string'

const TransactionHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black, marginHorizontal:width/20, marginVertical:width/20}}>Transaction History</Text>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:width/20, marginVertical:width/40}}>
          <Text style={{fontSize:14, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>id</Text>
        </View>
      </View>
    </View>
  )
}

export default TransactionHistoryScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    backgroundColor: colors?.white,
    borderRadius: 10,
    margin: "2%",
  }
});