import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../../res/color'
import fonts from '../../../../res/fonts'
import { width } from '../../../../res/string'
import { TextInput } from 'react-native-gesture-handler'

const RegularScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal:width/20, marginVertical: width/30, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <Text style={{fontSize:16, fontFamily:fonts?.PoppinsSemiBold, color:colors?.black,}}>Search Loan ID</Text>
        <TextInput
            style={styles.input}
            placeholder=''
        />
      </View>
    </View>
  )
}

export default RegularScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors?.screenBackColor
    },
    input:{
        width: width*0.4,
        backgroundColor:colors?.greyColor,
        borderRadius: 10,
        marginLeft:"4%"
    },
});