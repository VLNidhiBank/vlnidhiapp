import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../../res/color'
import { height, width } from '../../../../res/string';
import { Advisor_Icon, ArrowRight_Icon, BackBlack_Icon, Search_Icon } from '../../../../res/icons';
import fonts from '../../../../res/fonts';
import { useNavigation } from '@react-navigation/native';
import ScreenConstants from '../../../../Navigators/ScreenConstants';

const AdvisorMyTeamScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
        <View style={styles.container}>
            <View style={styles.searchInput}>
                <Search_Icon height={height / 15} width={width / 12} />
                <TextInput
                    placeholder='Search by name'
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>
            <Pressable style={styles.content} onPress={() => {navigation.navigate(ScreenConstants?.ADVISOR_TEAM_DETAILS_SCREEN)}}>
                <Advisor_Icon width={width / 7} />
                <View style={{ paddingHorizontal: width / 30, paddingVertical: width / 30, width: width * 0.4, }}>
                    <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsMedium, color: colors?.black }}>Manas Dhage</Text>
                    <Text style={{ fontSize: 14, fontFamily: fonts?.PoppinsRegular }}>VLCLN2247770008</Text>
                </View>
               <ArrowRight_Icon width={width/14} height={height/10}/>
            </Pressable>
        </View>
    )
}

export default AdvisorMyTeamScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    searchInput: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: '2%',
        paddingHorizontal: width / 20,
        // paddingVertical: width/25,
        // fontSize: 16,
        // borderColor: '#0378FF',
        // borderWidth: 1,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 12,
        backgroundColor: colors?.white,
        margin: "2%",
        paddingHorizontal: width / 20,
        // paddingVertical: width/30,
    },
});