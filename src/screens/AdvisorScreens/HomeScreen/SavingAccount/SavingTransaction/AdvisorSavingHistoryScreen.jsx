import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../../../../res/color';
import { AdvisorCard_Icon, File_Icon, Filter_Icon, Frame_Icon } from '../../../../../res/icons';
import { height, width } from '../../../../../res/string';
import images from '../../../../../res/images';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../../../res/fonts';

const transactions = [
    { id: '1', name: 'Lorem Ipsum', amount: '₹100', type: 'Paid To' },
    { id: '2', name: 'Lorem Ipsum', amount: '₹200', type: 'Paid To' },
    { id: '3', name: 'Lorem Ipsum', amount: '₹100', type: 'Paid To' },
    { id: '4', name: 'Lorem Ipsum', amount: '₹200', type: 'Paid To' },
    { id: '5', name: 'Lorem Ipsum', amount: '₹100', type: 'Paid To' },
    { id: '6', name: 'Lorem Ipsum', amount: '₹200', type: 'Paid To' },
    // Add more transactions as needed
];

const AdvisorSavingHistoryScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.headerHistory}>
            <Frame_Icon width={width / 8} height={height / 12} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 12, fontFamily: fonts?.PoppinsLight }}>{item.type}</Text>
                <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>{item.name}</Text>
            </View>
            <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>{item.amount}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["rgba(82, 182, 254, 0.8)", "rgba(97, 84, 254, 0.8)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.card}
            >
                <View style={{ paddingVertical: width / 10, paddingHorizontal: width / 20 }}>
                    <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.white }}>LAVKESH SINGH</Text>
                    <Text style={{ fontSize: 12, fontFamily: fonts?.PoppinsRegular, color: colors?.white }}>Balance</Text>
                    <Text style={{ fontSize: 24, fontFamily: fonts?.PoppinsBold, color: colors?.white }}>100.00</Text>
                </View>
            </LinearGradient>
            <View style={styles.history}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Transaction History</Text>
                    <Filter_Icon width={width / 14} height={height / 18} />
                </View>
                <FlatList
                    data={transactions}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ paddingBottom: height / 4 }}
                />
            </View>
        </View>
    );
};

export default AdvisorSavingHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    card: {
        width: width * 0.95,
        height: height / 4,
        borderRadius: 25,
        margin: "2%",
    },
    history: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors?.white,
        height: height,
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
    },
    headerHistory: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        backgroundColor: colors?.greyColor,
        margin: "2%",
        paddingVertical: width / 30,
        paddingHorizontal: width / 20,
        alignItems: "center",
        borderLeftColor: colors?.green,
        borderLeftWidth: 5,
    },
});
