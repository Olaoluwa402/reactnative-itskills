import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

export default function ButtonExample() {
  return (
    <View style={{marginTop:20}}>
      <Button title='Submit' onPress={()=> alert('button pressed')} color='green'/>
    </View>
  )
}

const styles = StyleSheet.create({})