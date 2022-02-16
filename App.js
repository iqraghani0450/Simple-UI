import { StatusBar } from 'expo-status-bar';
import React, { version } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { symbolicateLogLazy } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import Example from './Example';

export default function App(){
  return(
    <View style={styles.screen}>
      <Example text = 'ONE' ></Example>
      <Example text = 'TWO'></Example>
      <Example text = 'THREE'></Example>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'red',
    height: "100%",
    width: "100%",
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});