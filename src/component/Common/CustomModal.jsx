import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Cross_Icon, Failed_Icon, Success_Icon } from '../../res/icons';
import ScreenConstants from '../../Navigators/ScreenConstants';
import { height, width } from '../../res/string';
import fonts from '../../res/fonts';
import { colors } from '../../res/color';


const CustomModal = ({ visible, onClose, type }) => {
    const navigation = useNavigation();

    const isSuccess = type === 'success';

    return (
        <Modal visible={visible} transparent={true} animationType="fade">
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Pressable style={{ alignItems: "flex-end" }} onPress={onClose}>
                        <Cross_Icon width={width / 9} height={height / 15} />
                    </Pressable>
                    <View style={{ alignItems: "center" }}>
                        {isSuccess ? (
                            <Success_Icon width={width / 5} height={height / 12} />
                        ) : (
                            <Failed_Icon width={width / 5} height={height / 12} /> // Use Failure_Icon for failures
                        )}
                        <View style={{ paddingVertical: width / 20 }}>
                            <Text style={styles.history}>
                                {isSuccess ? 'Success!!!' : 'Failed!!!'}
                            </Text>
                            <Text style={styles.header}>
                                {isSuccess
                                    ? 'Beneficiary Added Successfully!!!.'
                                    : 'There was an issue with your fund transfer. Please try again.'}
                            </Text>
                        </View>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                onClose();  // Close the modal before navigating
                                if (isSuccess) {
                                    navigation.navigate(ScreenConstants?.IWALLET_TAB);
                                }
                            }}
                        >
                            <Text style={styles.btnText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: width * 0.9,
        height: height / 2.5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    history: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.blackColor
    },
    header: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsRegular,
        textAlign: "center"
    },
    button: {
        width: width * 0.3,
        height: height / 16,
        backgroundColor: colors?.primaryColor,
        borderRadius: 10,
        margin: "2%",
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.whiteColor,
        textAlign: "center",
        paddingVertical: width / 25
    }
});

export default CustomModal;
