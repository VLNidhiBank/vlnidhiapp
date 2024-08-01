import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import { CallIcon_Icon, Location_Icon, Mail_Icon, Whatsapp_Icon } from '../../../res/icons'
import fonts from '../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'

const ContactUs = () => {

    const Information = [
        { id: 1, icon: CallIcon_Icon, title: "9021559927" },
        { id: 2, icon: Whatsapp_Icon, title: "9021559927" },
        { id: 3, icon: Mail_Icon, title: "Venketlaxmi.urban nidhi@gmail.com" },
        { id: 4, icon: Location_Icon, title: "Second Floor,Golden Empire, Baner Road,Baner, Maharashtra 411045" },
    ]

    const Data = ({ item }) => {
        return (
            <>
                <View style={{ flexDirection: "row", width: width * 0.8, alignItems: "center",paddingVertical: width / 30, }}>
                    <item.icon height={height / 20} width={width / 14} />
                    <Text style={{ fontSize: 16, fontFamily: fonts?.PoppinsRegular, color: colors?.black, marginHorizontal: 20 }}>{item.title}</Text>
                </View>
                <View style={styles.separator} />
            </>
        )
    }
    return (
        <View style={styles.coontainer}>
            <View style={styles.content}>
                <FlatList
                    data={Information}
                    style={styles.flatlistStyles}
                    renderItem={({ item }) => {
                        return (
                            <Data item={item} />
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default ContactUs


const styles = StyleSheet.create({
    coontainer: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 20,
        // alignSelf: "center",
        marginTop: "4%",
        paddingHorizontal: width / 15,
        paddingVertical: width / 30,
    },
    separator: {
        height: 1,
        backgroundColor: colors?.greyColor,
        marginHorizontal: '15%',
        marginRight: "5%"
    },
});