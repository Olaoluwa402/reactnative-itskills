import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native'
import React from 'react'
 
const TouchableOpacityExample = () => {
  return (
    <TouchableHighlight style={styles.container} underlayColor='#000'>
      <Text style={styles.text}>Click me</Text>
    </TouchableHighlight>
  )
}

export default TouchableOpacityExample

const styles = StyleSheet.create({
        container:{
            marginTop:20,
            backgroundColor:'#200',
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:10,

        },
        text:{
            color:'#fff'
        }
})