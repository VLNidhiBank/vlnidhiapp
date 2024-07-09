import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ScreenConstants from '../../../Navigators/ScreenConstants'
import { colors } from '../../../res/color'
import { height, width } from '../../../res/string'
import LinearGradient from 'react-native-linear-gradient'

const HomeTiles = () => {
  return (
       <LinearGradient
          colors={['#4338CA', '#6366F1']}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={styles?.homeTilesWrapper} 
        >
            <Text>Here</Text>
            <Text>New Investment</Text>
            <Text>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit</Text>
            <Text>Here</Text>
        </LinearGradient>
      
  )
}

export default HomeTiles


const styles = StyleSheet.create({
  homeTilesWrapper: {
   height: height / 8,
   width: '100%',
   borderRadius: width / 30,
   justifyContent: 'center',
   alignItems: 'center',
  },
 
});

