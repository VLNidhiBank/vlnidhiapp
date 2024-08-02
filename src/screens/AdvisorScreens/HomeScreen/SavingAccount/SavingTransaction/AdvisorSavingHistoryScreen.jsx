import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../../../../../res/color'
import { AdvisorCard_Icon, Filter_Icon } from '../../../../../res/icons'
import { height, width } from '../../../../../res/string'
import images from '../../../../../res/images'
import LinearGradient from 'react-native-linear-gradient'
import fonts from '../../../../../res/fonts'

const AdvisorSavingHistoryScreen = () => {
    return (
        <View style={styles.container}>
            {/* <ImageBackground style={{height : height /4, width: width*0.95, margin:"2%",alignItems:"center", alignSelf:"center"}}  source={images.cardTwo}></ImageBackground> */}
            <LinearGradient
                colors={["#52B6FE", "#6154FE"]}
                start={{ x: 0, y: 0 }} // top left
                end={{ x: 1, y: 1 }}   // bottom right
                style={styles.card}>
            </LinearGradient>
            <View style={styles.history}>
                <Text style={{ fontSize: 18, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Transaction History</Text>
                <Filter_Icon width={width / 14} height={height / 18} />
            </View>
        </View>
    )
}

export default AdvisorSavingHistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    card: {
        width: width * 0.95,
        height: height / 4,
        borderRadius: 25,
        margin: "2%",
    },
    history: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // margin:"2%",
        backgroundColor: colors?.white,
        height: height,
        paddingHorizontal: width / 20,
        paddingVertical: width / 25,
    },
});
