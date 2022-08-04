import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import img from '../../assets/images/tarding.png'

const ImageExample = () => {
  return (
    <View>
      <Image source={img} style={{width:100, height:100}} />
      <Image 
        source={{uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png'}} style={{width:100, height:100}}/>
    </View>
  )
}

export default ImageExample

const styles = StyleSheet.create({})