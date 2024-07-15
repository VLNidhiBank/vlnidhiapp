import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color';
import { Arrow_Icon, DropWhite_Icon, UpWhite_Icon } from '../../../../res/icons';
import { height, width } from '../../../../res/string';
import fonts from '../../../../res/fonts';


const IntraTransferScreen = () => {
    const [showPDInfo, setShowPDInfo] = useState(false);
    const [showRDInfo, setShowRDInfo] = useState(false);

    const handleIconPress = () => {
        setShowPDInfo(!showPDInfo);
    };
    const handleRDPolicyPress = () => {
        setShowRDInfo(!showRDInfo);
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.planDetailsText}>Debit Savings A/C Details</Text>
                    <TouchableOpacity onPress={handleIconPress}>
                        {showPDInfo ? (
                            <UpWhite_Icon width={width / 15} height={width / 15} />
                        ) : (
                            <DropWhite_Icon width={width / 15} height={width / 15} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            {showPDInfo && (
                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Saving A/C No.</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Name</Text>
                        <Text style={styles.infoText1}>0</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Balance</Text>
                        <Text style={styles.infoText1}>0</Text>
                    </View>
                </View>
            )}

            <View style={styles.content2}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.planDetailsText}>Credit Savings A/C Details</Text>
                    <TouchableOpacity onPress={handleRDPolicyPress}>
                        {showRDInfo ? (
                            <UpWhite_Icon width={width / 15} height={width / 15} />
                        ) : (
                            <DropWhite_Icon width={width / 15} height={width / 15} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            {showRDInfo && (
                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Savings A/C No.</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                    <View style={{alignSelf:"flex-end"}}>
                        <Arrow_Icon width={width / 8} height={height / 10} />
                    </View>
                </View>
            )}
        </View>
    )
}

export default IntraTransferScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.green,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    content2: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.green,
        // alignSelf: "center",
        marginTop: "-1%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    planDetailsText: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.white,
    },
    infoBox: {
        width: width * 0.95,
        backgroundColor: colors?.white,
        alignSelf: "center",
        padding: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    infoRow: {
        width: width * 0.84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: "3%"
    },
    infoText: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsMedium,
    },
    infoText1: {
        color: colors?.black,
        fontSize: 16,
        fontFamily: fonts?.PoppinsMedium,
    },
});
