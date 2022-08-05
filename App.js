import React,{useState} from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import ParentComponent from './components/StateProp/ParentComponent';
import LearnStyleSheet from './components/StyleSheet/StyleSheet';
import FlexBox from './components/FlexBox/FlexBox';
import List from './components/ListView/List';
import InputText from './components/Inputtext/InputText';
import ScrollViewExample from './components/ScrollView/ScrollViewExample';
import ImageExample from './components/ImageExample/ImageExample';
import ButtonExample from './components/ButtonExamples/ButtonExample';
import TouchableOpacityExample from './components/ButtonExamples/TouchableOpacityExample';
import FetchExample from './components/HTTP/FetchExample';
import Animations from './components/Animation/AnimatedExample';
import AxiosFlatlist from './components/HTTP/AxiosFlatList';
import bg from './assets/images/tarding.png'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container} >
      <ImageBackground source={bg} resizeMode='cover'>
      {/* <ParentComponent />
      <LearnStyleSheet /> */}
      {/* <FlexBox /> */}
      {/* <InputText /> */}
      {/* <ImageExample  />
      <ButtonExample />
     <TouchableOpacityExample /> */}
     {/* <FetchExample /> */}
     <AxiosFlatlist />
     </ImageBackground>
    </SafeAreaView>
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
