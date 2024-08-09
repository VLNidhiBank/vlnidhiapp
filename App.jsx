import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigators from './src/Navigators'

import { colors } from './src/res/color'
import { height } from './src/res/string'
import MyStatusBar from './src/component/StatusBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './src/stores'



const App = () => {
  return (
    <SafeAreaView style={styles?.AppWrapper}>
      <Provider store={store}>
        <MyStatusBar backgroundColor={colors?.primaryColor} barStyle="light-content" />
        <Navigators />
      </Provider>
      {/* <ConnectionLost visible={!netInfo} />
					<FlashMessage animated position={'bottom'} /> */}
    </SafeAreaView>

  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: "black",
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppWrapper: {
    flex: 1,
    backgroundColor: colors?.primaryColor,
  },
});

