import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import { width } from '../../../../../res/string'

const HistoryTransaction = () => {

  // Sample transaction data
  const transactions = [
    {
      id: '01',
      date: '27/01/2024',
      narration: 'App trf to AC: VLN21221',
      deposit: '100',
      withdrawal: '0',
      balance: '200',
    },
    {
      id: '02',
      date: '26/01/2024',
      narration: 'App trf to AC: VLN21222',
      deposit: '200',
      withdrawal: '50',
      balance: '150',
    },
    {
      id: '03',
      date: '25/01/2024',
      narration: 'App trf to AC: VLN21222',
      deposit: '200',
      withdrawal: '50',
      balance: '150',
    },
    {
      id: '04',
      date: '24/01/2024',
      narration: 'App trf to AC: VLN21222',
      deposit: '500',
      withdrawal: '100',
      balance: '50',
    },
    // Add more transactions here
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.content}>
      <View style={{ marginHorizontal: width / 20, marginVertical: width / 20 }}>
        <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>{item.id}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular }}>Date</Text>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>{item.date}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular }}>Narration</Text>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>{item.narration}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:width/30}}>
          <View>
            <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Deposit</Text>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>{item.deposit}</Text>
          </View>
          <View>
            <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Withdrawal</Text>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>{item.withdrawal}</Text>
          </View>
          <View>
            <Text style={{fontSize:14, fontFamily:fonts?.PoppinsRegular}}>Balance</Text>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color:colors?.black }}>{item.balance}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default HistoryTransaction

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  list: {
    padding: width / 20,
  },
  content: {
    backgroundColor: colors?.white,
    borderRadius: 10,
    marginBottom: width / 20, // Add some space between items
  },
  separator: {
    height: 1,
    backgroundColor: colors?.greyColor,
    marginHorizontal: '1%',
    marginTop:"4%"
  },
});
