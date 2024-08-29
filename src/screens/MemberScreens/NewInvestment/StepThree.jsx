import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import { height, width } from '../../../res/string';
import fonts from '../../../res/fonts';
import { colors } from '../../../res/color';
import { Close_Icon } from '../../../res/icons';


const StepThree = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedScheme, setSelectedScheme] = useState('');

    const schemeNames = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];
    const schemeType = ['DRD', 'FD', 'MIS', 'RD'];

    const handleSelectScheme = (scheme) => {
        setSelectedScheme(scheme);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plan Details</Text>
            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.label}>Scheme Type</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <TextInput
                            style={styles.input}
                            placeholder='Select Scheme Type'
                            value={selectedScheme}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Scheme Name</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <TextInput
                            style={styles.input}
                            placeholder='Select Scheme Name'
                            value={selectedScheme}
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Term</Text>
                    <TextInput style={styles.input} placeholder='365' value='365' />
                </View>
                <View style={styles.content}>
                    <Text style={styles.label}>Mode</Text>
                    <TextInput style={styles.input} placeholder='Dly.' value='Dly.' />
                </View>
            </ScrollView>

            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Close_Icon width={width / 14} height={height / 20} />
                        </TouchableOpacity>
                        <FlatList
                            data={schemeNames}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalOption}
                                    onPress={() => handleSelectScheme(item)}
                                >
                                    <Text style={styles.modalOptionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default StepThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.white,
        borderRadius: 20,
        paddingVertical: width / 20,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
        paddingHorizontal: width / 20,
        marginBottom: width / 25,
    },
    content: {
        paddingVertical: width / 30,
        paddingHorizontal: width / 20,
    },
    label: {
        fontSize: 14,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.black,
    },
    input: {
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: width / 20,
        backgroundColor: 'rgba(128, 128, 128, 0.2)',
        marginTop: 5,
        color: colors?.black
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: width * 0.8,
        backgroundColor: colors?.white,
        borderRadius: 10,
        padding: 20,
    },
    closeButton: {
        position: 'absolute',
        // top: 10,
        right: 10,
        // zIndex: 1, // Ensure it's above other elements
    },
    modalOption: {
        paddingVertical: 10,
    },
    modalOptionText: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsMedium,
        color: colors?.black,
    },
});
