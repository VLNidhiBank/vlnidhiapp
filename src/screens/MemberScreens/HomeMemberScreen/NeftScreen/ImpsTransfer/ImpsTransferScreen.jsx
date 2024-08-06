import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import fonts from '../../../../../res/fonts'

const ImpsTransferScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Beneficiary List</Text>
                <View style={styles.header}>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>Bene. ID</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>CGNVJ9G</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>Name</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>Kokal</Text>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.header1}>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>Email</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>Kokal@gmail.com</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>Phone</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>9876543210</Text>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.header1}>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>A/C No.</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>987654x</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14, fontFamily:fonts?.PoppinsLight}}>VPA</Text>
                        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>567hfdd</Text>
                    </View>
                </View>
                <View style={styles.separator} />
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
        marginTop:"2%"
    },
    header1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:"4%"
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '1%',
    },
});