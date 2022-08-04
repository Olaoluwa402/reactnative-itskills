import React,{useState} from 'react';
import { View, StyleSheet } from 'react-native';
import ParentComponent from './components/StateProp/ParentComponent';
import LearnStyleSheet from './components/StyleSheet/StyleSheet';
import FlexBox from './components/FlexBox/FlexBox';
import List from './components/ListView/List';
import InputText from './components/Inputtext/InputText';
import ScrollViewExample from './components/ScrollView/ScrollViewExample';
import ImageExample from './components/ImageExample/ImageExample';
import ButtonExample from './components/ButtonExamples/ButtonExample';
import TouchableOpacityExample from './components/ButtonExamples/TouchableOpacityExample';

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <ParentComponent />
      <LearnStyleSheet /> */}
      {/* <FlexBox /> */}
      {/* <InputText /> */}
      <ImageExample  />
      <ButtonExample />
     <TouchableOpacityExample />
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
