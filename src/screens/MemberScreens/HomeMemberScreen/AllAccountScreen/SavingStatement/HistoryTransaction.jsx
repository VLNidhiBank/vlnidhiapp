import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import { width } from '../../../../../res/string'

const HistoryTransaction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ marginHorizontal: width / 20, marginVertical: width / 20 }}>
          <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>01</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular }}>Date</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>27/01/2024</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular }}>Narration</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>App trf to AC: VLN21221</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:width/30}}>
            <View>
              <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Deposit</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>100</Text>
            </View>
            <View>
              <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Withdrawal</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>0</Text>
            </View>
            <View>
              <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Balance</Text>
              <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>200</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HistoryTransaction

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    margin: "2%",
    backgroundColor: colors?.white,
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors?.greyColor,
    marginHorizontal: '1%',
},
});