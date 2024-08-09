import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'
import { useDispatch, useSelector } from 'react-redux'
import { memberBeneficiaryList } from '../../../../../stores/addBeneficiaryStores/addBeneficiarySlice'
import { width } from '../../../../../res/string'

const ImpsTransferScreen = () => {
    const List = useSelector(state => state.addBeneficiarySlice.memberBeneficiaryListData)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(memberBeneficiaryList());
    // }, [])

    // const renderItem = ({ item }) => (
    //     <View style={styles.content}>
    //         <View style={styles.header}>
    //             <View>
    //                 <Text style={styles.title}>Bene. ID</Text>
    //                 <Text style={styles.history}>{item.id}</Text>
    //             </View>
    //             <View>
    //                 <Text style={styles.title}>Name</Text>
    //                 <Text style={styles.history}>{item.name}</Text>
    //             </View>
    //         </View>
    //         <View style={styles.separator} />
    //         <View style={styles.header1}>
    //             <View>
    //                 <Text style={styles.title}>Email</Text>
    //                 <Text style={styles.history}>{item.email}</Text>
    //             </View>
    //             <View>
    //                 <Text style={styles.title}>Phone</Text>
    //                 <Text style={styles.history}>{item.phone}</Text>
    //             </View>
    //         </View>
    //         <View style={styles.separator} />
    //         <View style={styles.header1}>
    //             <View>
    //                 <Text style={styles.title}>A/C No.</Text>
    //                 <Text style={styles.history}>{item.accountNumber}</Text>
    //             </View>
    //             <View>
    //                 <Text style={styles.title}>VPA</Text>
    //                 <Text style={styles.history}>{item.upiId}</Text>
    //             </View>
    //         </View>
    //         <View style={styles.separator} />
    //     </View>
    // )

    return (
        <View style={styles.container}>
            <View style={{ borderRadius: 12, backgroundColor: colors?.white, paddingHorizontal: width / 20, paddingVertical: width / 35, margin: "2%" }}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Beneficiary List</Text>
                <View style={{ paddingVertical: width / 20 }}>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Select Beneficiary</Text>
                    <View style={{ backgroundColor: colors?.greyColor, borderRadius: 12, margin: "2%", paddingHorizontal: width / 20, paddingVertical: width / 20 }}>
                    </View>
                </View>
            </View>
            {/* <FlatList
                data={List}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> */}

            <View style={{ borderRadius: 12, backgroundColor: colors?.white, margin: "2%", paddingHorizontal: width / 20, paddingVertical: width / 25 }}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Beneficiary Details</Text>
                <View style={{ paddingVertical: width / 25 }}>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular, color: colors?.black }}>Bene. ID</Text>
                    <View style={{ backgroundColor: colors?.greyColor, borderRadius: 12, margin: "2%", paddingVertical: width / 30 }}>
                        <Text>ddddddddddd</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ImpsTransferScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin: "2%",
        backgroundColor: colors?.white,
        borderRadius: 12,
        padding: "4%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2%"
    },
    header1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "4%"
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '1%',
    },
    title: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsLight,
    },
    history: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.black
    },
});
