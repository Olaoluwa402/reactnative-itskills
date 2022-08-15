import { StyleSheet,
    Text, View, 
    Keyboard, 
    TouchableWithoutFeedback, 
    Platform, 
    KeyboardAvoidingView,
    TextInput,
    Button,
    Pressable} from 'react-native'
import React from 'react'


const KeyboardAvoidingExample = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding': 'height'}
    style = {styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
            <Text>Header Text</Text> 
            <TextInput placeholder='Enter text'/>
            <Button onPress={()=> null} title='submit' color='red'/>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardAvoidingExample

const styles = StyleSheet.create({})