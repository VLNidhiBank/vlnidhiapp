import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../res/color';



const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


interface MyStatusBarProps extends StatusBarProps {
  backgroundColor: string;
}


const MyStatusBar: React.FC<MyStatusBarProps> = ({ backgroundColor, ...props }) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={colors?.primaryColor} {...props} />
      </SafeAreaView>
    </View>
  );


  export default MyStatusBar


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    statusBar: {
    //   height: STATUSBAR_HEIGHT,
    },
    appBar: {
      backgroundColor:'#79B45D',
      height: APPBAR_HEIGHT,
    },
    content: {
      flex: 1,
      backgroundColor: '#33373B',
    },
  });