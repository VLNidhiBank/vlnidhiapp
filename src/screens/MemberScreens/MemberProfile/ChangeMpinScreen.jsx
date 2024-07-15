import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { TextInput } from 'react-native-gesture-handler'

const ChangeMpinScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{fontSize:16, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black}}>Change MPIN</Text>
                <View style={{paddingVertical: width/20}}>
                    <Text style={{fontSize:14, fontFamily:fonts?.PoppinsMedium, color:colors?.black}}> Old Password</Text>
                    <View style={styles.inputText}>
                        <TextInput
                            // style={styles.input}
                            placeholder=""
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChangeMpinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors?.screenBackColor,
    },
    content: {
        margin:"2%",
        // width: width * 0.95,
        backgroundColor: colors?.white,
        borderRadius: 15,
        // alignSelf: "center",
        marginTop:"4%",
        paddingVertical: width/30,
        paddingHorizontal: width/20,
    },
    inputText:{
        width: width * 0.85,
        height: height /20,
        backgroundColor:colors?.greyColor,
        borderRadius:10,
    },
    // input:{

    // },
});