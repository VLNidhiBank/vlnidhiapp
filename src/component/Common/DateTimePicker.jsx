import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Date_Icon } from '../../res/icons';
import { height, width } from '../../res/string';
import { format } from 'date-fns';


const DateTimePicker = ({ onSelectDate }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const formattedDate = format(date, 'dd-MM-yyyy');
        setSelectedDate(formattedDate);
        onSelectDate(date); // Pass selected date back to parent component
        hideDatePicker();
    };

    return (
        <>
            <View style={styles.container}>
                <Date_Icon height={height / 20} width={width / 14} />
                <Pressable style={styles.datePicker} onPress={showDatePicker}>
                    <Text style={styles.dateText}>{selectedDate ? selectedDate : 'Select Date'}</Text>
                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date()}
                />
            </View>
        </>
    );
};

export default DateTimePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width *0.37,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    datePicker: {
        flex: 1,
        marginLeft: 10,
        paddingVertical: 10,
    },
    dateText: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
    },
});
