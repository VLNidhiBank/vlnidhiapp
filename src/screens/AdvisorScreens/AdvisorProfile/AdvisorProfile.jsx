import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../res/color'
import { width } from '../../../res/string'
import fonts from '../../../res/fonts'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const AdvisorProfile = () => {

  const navigation = useNavigation()

  const Information = [
    { id: 1, title: "Full name:", subtitle: "Lorem Ispum" },
    { id: 2, title: "Code:", subtitle: "VL0003" },
    { id: 3, title: "Address:", subtitle: "Pune" },
    { id: 4, title: "Mobile:", subtitle: "0987654321" },
    { id: 5, title: "Branch Name:", subtitle: "001" },
    { id: 6, title: "Date of Join:", subtitle: "26-00-1999" },
    { id: 7, title: "Date of Birth:", subtitle: "26-00-1999" },
    { id: 8, title: "Age:", subtitle: "27" },
    { id: 9, title: "Relative Name:", subtitle: "S0" },
    { id: 10, title: "Relative Relation:", subtitle: "Father" },
    { id: 11, title: "PAN:", subtitle: "qwertyui" },
    { id: 12, title: "Nominee Name:", subtitle: "Nikhil" },
    { id: 13, title: "Nominee Age:", subtitle: "23" },
    { id: 14, title: "Nominee Relation:", subtitle: "Brother" },
  ]

  const Data = ({ item }) => {
    return (

      <View style={{ flexDirection: "row", justifyContent: "space-between",   paddingVertical: width /50,   }}>
        <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsSemiBold, color: colors?.black }}>{item.title}</Text>
        <Text style={{ width: '50%', fontSize: 16, fontFamily: fonts?.PoppinsRegular,  }}>{item.subtitle}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
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

export default AdvisorProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  content: {
    // width: width * 0.95,
    margin:"2%",
    borderRadius: 20,
    backgroundColor: colors?.white,
    // alignSelf: "center",
    marginTop: "4%",
    paddingHorizontal: width /15,
    paddingVertical: width /30,
  },
});