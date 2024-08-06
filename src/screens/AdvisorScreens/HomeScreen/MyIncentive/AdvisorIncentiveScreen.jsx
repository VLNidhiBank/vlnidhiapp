import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color'
import { width } from '../../../../res/string'
import fonts from '../../../../res/fonts'
import CustomTextInput from '../../../../component/CustomTextInput'
import CustomButton from '../../../../component/CustomButton'
import { DropWhite_Icon, UpWhite_Icon } from '../../../../res/icons'

const AdvisorIncentivescreen = () => {
    const [vmonth, setVMonth] = useState("");

    const [showPDInfo, setShowPDInfo] = useState(false);
    const handleIconPress = () => {
        setShowPDInfo(!showPDInfo);
    };


    const VMonth = {
        title: 'V-Month',
        // palceHolderText: 'Latitude',
        // FirstIcon: Lock_Icon,
        // SecondIcon: PassEye_Icon,
        inputValue: vmonth,
        actionSecond: () => setVMonth(!vmonth),
        isAccountNo: vmonth,
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>My Incentive</Text>
                <View>
                    <CustomTextInput inputData={VMonth} />
                    <CustomButton buttonTitle={"Show"} />
                </View>
            </View>

            <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Plan Details</Text>
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
                            <Text style={styles.infoText}>Total Biz</Text>
                            <Text style={styles.infoText1}>200</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Self Biz</Text>
                            <Text style={styles.infoText1}>200</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Self Biz</Text>
                            <Text style={styles.infoText1}>200</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Chain Biz</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total Comm</Text>
                            <Text style={styles.infoText1}>6</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total TDS </Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Net Payment</Text>
                            <Text style={styles.infoText1}>6</Text>
                        </View>
                    </View>
                )}
        </View>
    )
}

export default AdvisorIncentivescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        borderRadius: 10,
        backgroundColor: colors?.white,
        margin: "2%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
    },
    content1: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: "#3333FF",
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
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