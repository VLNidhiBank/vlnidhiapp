import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color'
import fonts from '../../../../res/fonts';
import { height, width } from '../../../../res/string';
import { Download_Icon, DropWhite_Icon, Qrcode_Icon, UpWhite_Icon } from '../../../../res/icons';

const VirtualAccountScreen = () => {
    const [showPDInfo, setShowPDInfo] = useState(false);
    const [showRDInfo, setShowRDInfo] = useState(false);
    const [showDPInfo, setShowDPInfo] = useState(false);

    const handleIconPress = () => {
        setShowPDInfo(!showPDInfo);
    };
    const handleRDPolicyPress = () => {
        setShowRDInfo(!showRDInfo);
    };
    const handleDailyPolicyPress = () => {
        setShowDPInfo(!showDPInfo);
    };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.planDetailsText}>Virtual Account Details</Text>
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
                        <Text style={styles.infoText}>Account No</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>IFSC Code</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                </View>
            )}

            <View style={styles.content1}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.planDetailsText}>Virtual UPI IDs</Text>
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
                        <Text style={styles.infoText}>UPI ID</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>QR Code</Text>
                        {/* <Text style={styles.infoText1}>0</Text> */}
                        <Qrcode_Icon width={width / 15} height={width / 10} />
                    </View>
                </View>
            )}


            <View style={styles.content2}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.planDetailsText}>Debit Card Details</Text>
                    <TouchableOpacity onPress={handleDailyPolicyPress}>
                        {showDPInfo ? (
                            <UpWhite_Icon width={width / 15} height={width / 15} />
                        ) : (
                            <DropWhite_Icon width={width / 15} height={width / 15} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            {showDPInfo && (
                <View style={styles.infoBox}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Card No</Text>
                        <Text style={styles.infoText1}>NA</Text>
                    </View>
                </View>
            )}
            <View style={{alignItems:"flex-end", width:width*0.96, marginTop:"45%"}}>
                <Download_Icon width={width / 8} height={height / 10} />
            </View>
        </View>
    )
}

export default VirtualAccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.primaryColor,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    content1: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.primaryColor,
        // alignSelf: "center",
        marginTop: "-1%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
    },
    content2: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.primaryColor,
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
        width: width * 0.96,
        margin:"3%",
        backgroundColor: colors?.white,
        alignSelf: "center",
        padding: 10,
        marginTop:"-2%",
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