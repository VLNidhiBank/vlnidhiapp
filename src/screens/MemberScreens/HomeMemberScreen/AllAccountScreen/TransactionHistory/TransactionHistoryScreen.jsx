import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SectionList } from 'react-native';
import { colors } from '../../../../../res/color';
import fonts from '../../../../../res/fonts';
import { height, width } from '../../../../../res/string';
import { Circle_Icon, GrayBack_Icon, Search_Icon } from '../../../../../res/icons';
import { useDispatch } from 'react-redux';

const allTransactions = [
  { id: '1', name: 'Amelia Dawson', dateCategory: 'Today', date: '25 Nov 2024', time: '3:24', amount: '-2,000'},
  { id: '2', name: 'John Smith', dateCategory: 'Today', date: '25 Nov 2024', time: '1:14', amount: '+500'},
  { id: '3', name: 'Emma Watson', dateCategory: 'Yesterday', date: '24 Nov 2024', time: '4:45', amount: '-1,500'},
  { id: '4', name: 'Harry Smith', dateCategory: 'Yesterday', date: '24 Nov 2024', time: '4:45', amount: '+1,500'},
  { id: '5', name: 'Amma Watson', dateCategory: 'Yesterday', date: '24 Nov 2024', time: '4:45', amount: '+1,500'},
  { id: '6', name: 'Bunny Dawson', dateCategory: 'Today', date: '25 Nov 2024', time: '4:45', amount: '-1,500'},
  { id: '7', name: 'Anny Watson', dateCategory: 'Yesterday', date: '24 Nov 2024', time: '4:45', amount: '+1,500'},
  { id: '8', name: 'Emma Watson', dateCategory: 'Yesterday', date: '24 Nov 2024', time: '4:45', amount: '-1,500'},
  { id: '9', name: 'Emma Smith', dateCategory: 'Today', date: '25 Nov 2024', time: '4:45', amount: '-1,500'},
  { id: '10', name: 'Emma Dawson', dateCategory: 'Today', date: '25 Nov 2024', time: '4:45', amount: '+1,500'},
];

const TransactionHistoryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(allTransactions);


  const dispatch = useDispatch();
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredTransactions(allTransactions);
    } else {
      const filtered = allTransactions.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Circle_Icon width={width / 10} height={width / 10} />
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionName}>{item.name}</Text>
        <Text style={styles.transactionDate}>{`${item.date}  |  ${item.time}`}</Text>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: item.amount.startsWith('-') ? 'red' : 'green' }
        ]}
      >
        {item.amount}
      </Text>
      <GrayBack_Icon width={width / 12} height={width / 12} />
    </View>
  );

  const renderSectionHeader = ({ section: { dateCategory } }) => (
    <Text style={styles.sectionHeader}>{dateCategory}</Text>
  );

  const groupedTransactions = filteredTransactions.reduce((sections, item) => {
    const section = sections.find(s => s.dateCategory === item.dateCategory);
    if (section) {
      section.data.push(item);
    } else {
      sections.push({ dateCategory: item.dateCategory, data: [item] });
    }
    return sections;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Search_Icon width={width / 15} height={height / 15} />
        <TextInput
          style={styles.input}
          placeholder='Search Here'
          placeholderTextColor={colors?.placeholderColor}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <SectionList
        sections={groupedTransactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.transactionContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
    // paddingHorizontal: '5%',
    // paddingTop: '5%',
  },
  inputContainer: {
    margin:"2%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors?.white,
    borderRadius: 10,
    marginHorizontal: width/30,
    // paddingHorizontal: '4%',
    // paddingVertical: '2%',
    // marginBottom: '4%',
  },
  input: {
    flex: 1,
    marginLeft: '4%',
    fontSize: 16,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.textColor,
  },
  transactionContainer: {
    margin:"2%",
    backgroundColor: colors?.white,
    borderRadius: 10,
    padding: '4%',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: '3%',
    // paddingHorizontal: '2%',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: '4%',
  },
  transactionName: {
    fontSize: 16,
    fontFamily: fonts?.PoppinsMedium,
    color: colors?.black,
  },
  transactionDate: {
    fontSize: 12,
    fontFamily: fonts?.PoppinsRegular,
    color: colors?.black,
  },
  transactionAmount: {
    fontSize: 14,
    fontFamily: fonts?.PoppinsSemiBold,
  },
  separator: {
    height: 1,
    backgroundColor: colors?.greyColor,
    marginVertical: '2%',
  },
  sectionHeader: {
    fontSize: 18,
    fontFamily: fonts?.PoppinsSemiBold,
    color: colors?.black,
    marginVertical: '2%',
  },
});
