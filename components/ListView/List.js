import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const List = () => {
    const init = [{id:0,name:'John'},{id:1,name:'Peter'},{id:2,name:'Daniel'},{id:3,name:'Ben'},{id:4,name:'Godwin'},]
   const [state,setState] = useState(init)

   const alertName = (name) => {
      alert(name)
   }
    return (
    <View >
      {
        state.map((item)=> (
        <TouchableOpacity 
            style={styles.container}
            key={item.id}
            onPress={()=> alertName(item.name)}
            >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>))
      }
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    container:{
      width:'100%',
        padding:10,
        marginTop:20,
        backgroundColor:'green'
    },
    text:{
        color:'#fff'
    }
})