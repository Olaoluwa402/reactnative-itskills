import { StyleSheet, Text, View, SafeAreaView, Animated, Button} from 'react-native'
import React,{useRef} from 'react'

const AnimationExample = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const fadeIn = ()=> {
        Animated.timing(fadeAnim, {
            toValue:1,
            duration:5000,
            useNativeDriver:true
        }).start()
    }

    const fadeOut = ()=> {
        Animated.timing(fadeAnim, {
            toValue:0,
            duration:5000,
            useNativeDriver:true
        }).start()
    }
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.fadecontainer, {opacity:fadeAnim}]}>
            <Text>box to be animated</Text>
        </Animated.View>
        <View style={styles.btnContainer}>
            <Button title='Fade In' color='blue' onPress={fadeIn}/>
            <Button title='Fade Out' color='green' onPress={fadeOut}/>
        </View>
    </View>
  )
}

export default AnimationExample

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
  fadecontainer:{
    padding:20,
    backgroundColor:'orange'
  },

  btnContainer:{
    flexDirection:'row',
    padding: 10,
    justifyContent:'space-evenly'
  }
})