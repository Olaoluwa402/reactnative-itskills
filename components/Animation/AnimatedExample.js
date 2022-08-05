import React, { useRef} from 'react'
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native'

const Animations =()=> {
   const animatedWidth = useRef(new Animated.Value(50)).current
   const animatedHeight = useRef( new Animated.Value(100)).current
   
   const animatedBox = () => {
      Animated.timing(animatedWidth, {
         toValue: 200,
         duration: 1000,
         useNativeDriver: true
      }).start()
      Animated.timing(animatedHeight, {
         toValue: 500,
         duration: 500,
         useNativeDriver: true
      }).start() 
   }  
      const animatedStyle = { width: animatedWidth, height: animatedHeight }
      return (
         <TouchableOpacity style = {styles.container} onPress = {()=> animatedBox}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
      ) 
}
export default Animations

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center'
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100
   }
})