import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexBox = () => {
  return (
    <View style={styles.container}>
       <View style={[styles.box, styles.box1]}>
        <Text style={{color:'green'}}>1</Text>
    </View>
       <View style={[styles.box, styles.box2]}>
        <Text style={{color:'green'}}>2</Text>
        </View>
       <View style={[styles.box, styles.box3]}>
        <Text style={{color:'green'}}>3</Text>
        </View>
    </View>
  )
}

export default FlexBox

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#776'
    },
    box:{
        width:75,
        height:75,
    },
    box1:{
        backgroundColor:'purple'
    },
    box2:{
        backgroundColor:'yellow'
    },
    box3:{
        backgroundColor:'white'
    }
})