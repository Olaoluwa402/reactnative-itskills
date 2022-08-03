import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LearnStyleSheet = () => {
  return (
    <View>
      <Text style={styles.text}>This is how to style wit react native StyleSheet</Text>
    </View>
  )
}

export default LearnStyleSheet

const styles = StyleSheet.create({
    text:{
        marginTop:20,
        textAlign:'center',
        color:'blue',
        fontWeight:'bold',
        fontSize:20
    }
})