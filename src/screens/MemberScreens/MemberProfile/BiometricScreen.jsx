import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../res/color'
import { width } from '../../../res/string'
import fonts from '../../../res/fonts'

const BiometricScreen = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Setting</Text>
                <View style={styles.row}>
                    <Text style={styles.subTitle}>Biometric Setting</Text>
                    <Switch
                        trackColor={{ false: colors?.red, true: colors?.green }}
                        thumbColor={isToggled ? colors?.white : colors?.white}
                        ios_backgroundColor={colors?.gray}
                        onValueChange={handleToggle}
                        value={isToggled}
                    />
                </View>
            </View>
        </View>
    )
}

export default BiometricScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 20,
        // alignSelf: "center",
        marginTop: "5%",
        paddingHorizontal: width / 15,
        paddingVertical: width / 30,
    },
    title: {
        fontSize: 18,
        fontFamily: fonts?.PoppinsSemiBold,
        color: colors?.black,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        // width: width * 0.8,
        paddingVertical: width / 30,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: fonts?.PoppinsRegular,
        color: colors?.black,
    },
});
