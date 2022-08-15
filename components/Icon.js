import { StyleSheet, Text, View, Pressable,} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Icon = ({name, text})=> {
    const navigation = useNavigation();
     return (
      <Pressable style={styles.Icon} onPress={()=> navigation.navigate(text)}>
        <FontAwesome5 name={name}/>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
     )
  }
  export default Icon

  const styles = StyleSheet.create({
    
  })