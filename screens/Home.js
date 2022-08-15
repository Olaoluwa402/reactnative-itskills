import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../components/Tab'
import SwitchExample from '../components/Switch/SwitchExample';

const Home = ({navigation}) => {
  return (
    <View>
      <Text >This is the Home page </Text>
      <SwitchExample />
      <Tab />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})