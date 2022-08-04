import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const InputText = () => {
  const [state, setState] = useState({
    email:'',
    password:''
  })

  const emailHandler = (text)=> {
     setState({
      ...state, email:text
     })
  }

  const passwordHandler = (text)=> {
    setState({
     ...state, password:text
    })
 }

 const login = (email, password) => {
    alert(`Email: ${email}, Passwword:${password}`)
 }
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Enter Email'
        placeholderTextColor='#648630'
        onChangeText={(text)=> emailHandler(text)}
        defaultValue={state.email}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        style={styles.input}
        autoFocus
      />

    <TextInput 
        placeholder='Enter password'
        placeholderTextColor='#648630'
        onChangeText={passwordHandler}
        defaultValue={state.password}
        autoCapitalize='none'
        underlineColorAndroid='transparent'
        style={styles.input}
      />

    <TouchableOpacity onPress={()=> login(state.email, state.password)}  style={styles.actionBtn}>
        <Text style={styles.btn}>Login</Text>
    </TouchableOpacity>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    container:{
      width:'100%',
      padding:15,
    },
    input:{
      backgroundColor:'#002',
      color:'#fff',
      marginTop:10,
      paddingHorizontal:10,
      paddingVertical:15
    },
    actionBtn:{
       width:'100%',
       paddingHorizontal:15,
       paddingVertical:10,
       backgroundColor:'green',
       marginTop:24,
       borderRadius:10
    },
    btn:{
      color:'#fff',
      textAlign:'center',
    }
})