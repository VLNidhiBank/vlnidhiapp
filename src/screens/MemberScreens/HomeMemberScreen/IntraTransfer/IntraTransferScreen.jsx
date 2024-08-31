import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color';
import { Arrow_Icon, DropWhite_Icon, UpWhite_Icon } from '../../../../res/icons';
import { height, width } from '../../../../res/string';
import fonts from '../../../../res/fonts';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../../../component/CustomButton';


const IntraTransferScreen = () => {
    const [showPDInfo, setShowPDInfo] = useState(false);
    const [showRDInfo, setShowRDInfo] = useState(false);

    const handleIconPress = () => {
        setShowPDInfo(!showPDInfo);
    };
    const handleRDPolicyPress = () => {
        setShowRDInfo(!showRDInfo);
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleArrowClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
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
                        <Text style={styles.infoText1}>RAM SIR</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Balance</Text>
                        <Text style={styles.infoText1}>10,000</Text>
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
                        {/* <Text style={styles.infoText1}>NA</Text> */}
                        <TextInput
                            style={styles.textInput}
                            placeholder=''
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{ alignSelf: "flex-end" }}>
                        <TouchableOpacity onPress={handleArrowClick}>
                            <Arrow_Icon width={width / 8} height={height / 10} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Transfer Fund</Text>
                        <Text style={{fontSize:15, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black}}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                        />
                        
                        <Text style={{fontSize:15, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black}}>Amount</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Amount"
                            value={amount}
                            onChangeText={setAmount}
                            keyboardType="numeric"
                        />

                        <CustomButton buttonTitle="Confirm" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
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
        margin: "2%",
        // width: width * 0.95,
        backgroundColor: colors?.primaryColor,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    content2: {
        margin: "2%",
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
        margin: "3%",
        backgroundColor: colors?.white,
        alignSelf: "center",
        padding: 10,
        marginTop: "-2%",
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
    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors?.black,
        width: width * 0.53,
        marginLeft: "4%"
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '95%',
        backgroundColor: colors?.white,
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: colors?.greyColor,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        fontFamily: fonts?.PoppinsRegular,
        color: colors?.black,
        marginBottom: 15,
    },
});
