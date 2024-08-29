import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../../res/color';
import { height, width } from '../../../../res/string';
import fonts from '../../../../res/fonts';
import { DropWhite_Icon, UpWhite_Icon } from '../../../../res/icons'; // Make sure UpWhite_Icon is imported

const MemberSummaryScreen = () => {
    const [showPDInfo, setShowPDInfo] = useState(false);
    const [showRDInfo, setShowRDInfo] = useState(false);
    const [showDPInfo, setShowDPInfo] = useState(false);
    const [showFDInfo, setShowFDInfo] = useState(false);
    const [showMISInfo, setShowMISInfo] = useState(false);
    const [showSAnfo, setShowSAInfo] = useState(false);
    const [showLInfo, setShowLInfo] = useState(false);
    const [showGLInfo, setShowGLInfo] = useState(false);
    const [showMRInfo, setShowMRInfo] = useState(false);

    const handleIconPress = () => {
        setShowPDInfo(!showPDInfo);
    };
    const handleRDPolicyPress = () => {
        setShowRDInfo(!showRDInfo);
    };
    const handleDailyPolicyPress = () => {
        setShowDPInfo(!showDPInfo);
    };
    const handleFDPolicyPress = () => {
        setShowFDInfo(!showFDInfo);
    };
    const handleMISPolicyPress = () => {
        setShowMISInfo(!showMISInfo);
    };
    const handleSavingAccountPress = () => {
        setShowSAInfo(!showSAnfo);
    };
    const handleLoanPress = () => {
        setShowLInfo(!showLInfo);
    };
    const handleGoldLoanPress = () => {
        setShowGLInfo(!showGLInfo);
    };
    const handleMRPress = () => {
        setShowMRInfo(!showMRInfo);
    };
    // const handleDailyPolicyPress = () => {
    //     setShowDPInfo(!showDPInfo);
    // };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
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
                            <Text style={styles.infoText}>Total Share</Text>
                            <Text style={styles.infoText1}>10</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Share Amount</Text>
                            <Text style={styles.infoText1}>100</Text>
                        </View>
                    </View>
                )}

                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>RD Policy</Text>
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
                            <Text style={styles.infoText}>Policy No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total Deposit</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Next Renewal On</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Daily Policy</Text>
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
                            <Text style={styles.infoText}>Policy No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total Deposit</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Next Renewal On</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>FD Policy</Text>
                        <TouchableOpacity onPress={handleFDPolicyPress}>
                            {showFDInfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showFDInfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Estimated Return</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Maturity On</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>MIS Policy</Text>
                        <TouchableOpacity onPress={handleMISPolicyPress}>
                            {showMISInfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showMISInfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>MIS Interest Retrun</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Maturity On</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Saving Account</Text>
                        <TouchableOpacity onPress={handleSavingAccountPress}>
                            {showSAnfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showSAnfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Account No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total Deposit</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Total Withdrawal</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Available Balance</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Loan</Text>
                        <TouchableOpacity onPress={handleLoanPress}>
                            {showLInfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showLInfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Loan ID</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Loan Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Due Principal</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Due Interest</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}


                <View style={styles.content1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Gold Loan</Text>
                        <TouchableOpacity onPress={handleGoldLoanPress}>
                            {showGLInfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showGLInfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Loan ID</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Loan Amount</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Due Principal</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Due Interest</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}

                <View style={styles.content2}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.planDetailsText}>Maturity Requisition</Text>
                        <TouchableOpacity onPress={handleMRPress}>
                            {showMRInfo ? (
                                <UpWhite_Icon width={width / 15} height={width / 15} />
                            ) : (
                                <DropWhite_Icon width={width / 15} height={width / 15} />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                {showMRInfo && (
                    <View style={styles.infoBox}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Policy No</Text>
                            <Text style={styles.infoText1}>NA</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Status</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Maturity Date</Text>
                            <Text style={styles.infoText1}>0</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoText}>Calculated Maturity</Text>
                            <Text style={styles.infoText1}>00/00/0000</Text>
                        </View>
                    </View>
                )}

                <View style={{margin:"5%"}}>
                </View>

            </ScrollView>
        </View>
    );
};

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
        margin:"3%",
        width: width * 0.96 ,
        backgroundColor: colors?.white,
        alignSelf: "center",
        padding: "3%",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop:"-2%",
    },
    infoRow: {
        width: width * 0.84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: "3%",
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

export default MemberSummaryScreen;
