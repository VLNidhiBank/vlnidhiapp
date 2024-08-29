import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../../../../../res/color';
import { width } from '../../../../../../res/string';
import fonts from '../../../../../../res/fonts';
import CustomButton from '../../../../../../component/CustomButton';

const AmortizationScreen = () => {
    // Sample data for the FlatList
    const emiData = [
        { id: '1', emiNo: '1', dueDate: '30/08/2024', emi: '1', principle: '1.0', interest: '0.0', balance: '4.0' },
        { id: '2', emiNo: '2', dueDate: '30/09/2024', emi: '1', principle: '1.0', interest: '0.0', balance: '3.0' },
        { id: '3', emiNo: '3', dueDate: '30/10/2024', emi: '1', principle: '1.0', interest: '0.0', balance: '2.0' },
        // Add more items as needed
    ];

    // Render function for each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.content}>
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.labelText}>EMI No.</Text>
                    <Text style={styles.valueText}>{item.emiNo}</Text>
                </View>
                <View>
                    <Text style={styles.labelText}>Due Date</Text>
                    <Text style={styles.valueText}>{item.dueDate}</Text>
                </View>
            </View>
            <View style={styles.main}>
                <View>
                    <Text style={styles.labelText}>EMI</Text>
                    <Text style={styles.valueText}>{item.emi}</Text>
                </View>
                <View>
                    <Text style={styles.labelText}>Principle</Text>
                    <Text style={styles.valueText}>{item.principle}</Text>
                </View>
            </View>
            <View style={styles.row3}>
                <View>
                    <Text style={styles.labelText}>Interest</Text>
                    <Text style={styles.valueText}>{item.interest}</Text>
                </View>
                <View>
                    <Text style={styles.labelText}>Balance</Text>
                    <Text style={styles.valueText}>{item.balance}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={emiData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={{ margin: '2%' }}>
                <CustomButton buttonTitle={'OK'} />
            </View>
        </View>
    );
};

export default AmortizationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        backgroundColor: colors?.white,
        borderRadius: 10,
        margin: '2%',
        padding: '2%',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: width / 20,
        marginVertical: width / 20,
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: width / 20,
    },
    row3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: width / 20,
        marginVertical: width / 30,
    },
    labelText: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
    },
    valueText: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsRegular,
        color: colors?.black,
    },
});
