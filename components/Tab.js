import { StyleSheet, Text, View, Pressable,} from 'react-native'
import React from 'react'
import Icon from './Icon'

const Tab = () => {
  return (
    <View style={styles.container}>
         <Icon name='home' text='Home'/>
        <Icon name='search' text='About' />
        <Icon name='user' text='Contact'/>
    </View>
  )
}
export default Tab
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
})