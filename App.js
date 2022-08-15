import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import Navigation from './Navigation';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container} >
      <Navigation />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
