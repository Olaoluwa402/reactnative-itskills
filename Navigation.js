import { StyleSheet, Text, View, StatusBar  } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'

const Navigation = () => {
    const Stack = createNativeStackNavigator();
     const screenOptions = {
      headerShown:false,
     }
     
  return (
     <>
     <StatusBar style='dark'/>
     <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name='Home' component={Home }/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Contact' component={Contact}/>
     </Stack.Navigator>
    </NavigationContainer>
     </>
  )
}

export default Navigation

const styles = StyleSheet.create({})