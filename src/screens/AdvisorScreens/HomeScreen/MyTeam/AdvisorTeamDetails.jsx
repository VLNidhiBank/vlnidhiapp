import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string'
import { AdvisorUser_Icon } from '../../../../res/icons'
import fonts from '../../../../res/fonts'

const AdvisorTeamDetails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AdvisorUser_Icon height={height/7}/>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Advisor Name</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>Manas Dhage</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Advisor Code</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>VLCLN2247770008</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Rank</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>1</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Intro Name</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>Tejas Undarmene</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Intro Code</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}>VLCLN2247770004</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",}}>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsRegular}}>Advisor Status</Text>
                    <Text style={{fontSize:16, fontFamily:fonts?.PoppinsMedium, color:colors?.green}}>Active</Text>
                </View>
            </View>
        </View>
    )
}

export default AdvisorTeamDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        borderRadius: 12,
        backgroundColor: colors?.white,
        margin: "2%",
        paddingHorizontal: width / 20,
        paddingVertical: width / 20,
    }
});