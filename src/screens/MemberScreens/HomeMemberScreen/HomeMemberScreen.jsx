import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ScreenConstants from '../../../Navigators/ScreenConstants'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import HomeTiles from './HomeTiles'

const HomeMemberScreen = () => {
  return (
    <View style={styles?.homeWrapper} >
      <View style={styles?.homeHeaderWrapper} >
        <View style={styles?.homeHeader} >
          <Text>VL</Text>
        </View>
        <View style={styles?.bannnerWrapper} >
          <Text>Banner</Text>
        </View>
      </View>
      <ScrollView style={styles?.bottomScroll} >
        <HomeTiles />
      </ScrollView>
    </View>
  )
}

export default HomeMemberScreen


const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    backgroundColor: colors?.screenBackColor,
  },
  homeHeaderWrapper: {
    height: height / 3,
    backgroundColor: 'red',
  },
  homeHeader: {
    height: '30%',
    backgroundColor: 'green',
  },
  bannnerWrapper: {
    height: '70%',
    backgroundColor: colors?.greyColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomScroll: {
   paddingVertical: width / 40,
   paddingHorizontal: width / 40,
  },
});

