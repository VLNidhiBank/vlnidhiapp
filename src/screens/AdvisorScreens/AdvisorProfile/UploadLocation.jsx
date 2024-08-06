import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { Travel_Icon } from '../../../res/icons'
import CustomButton from '../../../component/CustomButton'

const UploadLocation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Upload Location</Text>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: "5%" }}>
                    <Travel_Icon width={width / 2} height={height / 5} />
                    <Text style={{ fontSize: 20, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>Allow Location Access</Text>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}>We use this to shoe nearby stores.</Text>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsLight }}> You can edit access in your phone’s settings.</Text>
                </View>
                <CustomButton buttonTitle={"Allow Access"}/>
            </View>
        </View>
    )
}

export default UploadLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        borderRadius: 10,
        backgroundColor: colors?.white,
        margin: "2%",
        paddingHorizontal: width / 25,
        paddingVertical: width / 20,
    }
});