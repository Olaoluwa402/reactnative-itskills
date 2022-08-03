import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import ParentComponent from './components/StateProp/ParentComponent';
import LearnStyleSheet from './components/StyleSheet/StyleSheet';
import FlexBox from './components/FlexBox/FlexBox';
import List from './components/ListView/List';
export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <ParentComponent />
      <LearnStyleSheet /> */}
      {/* <FlexBox /> */}
      <List />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
