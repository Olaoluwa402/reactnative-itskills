import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight} from 'react-native'
import React from 'react'
 
const TouchableOpacityExample = () => {
  return (
    <View style={styles.container}>
        <TouchableHighlight  underlayColor='green'>
        <Text style={styles.text}>Click me</Text>
      </TouchableHighlight>
    </View>
  )
}

export default TouchableOpacityExample

const styles = StyleSheet.create({
        container:{
            marginTop:20,
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:10,

        },
        text:{
            color:'#fff',
            backgroundColor:'#200',
        }
})