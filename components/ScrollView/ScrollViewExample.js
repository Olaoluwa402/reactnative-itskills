import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

const ScrollViewExample = () => {
    const init = [
        {id:0,name:'John'},
        {id:1,name:'Peter'}, 
        {id:2,name:'Daniel'},
        {id:3,name:'Ben'},
        {id:4,name:'Godwin'},
        {id:5,name:'Godwin'},
        {id:6,name:'Godwin'},
        {id:7,name:'Godwin'},
        {id:8,name:'Godwin'},
        {id:9,name:'Godwin'},
        {id:10,name:'Godwin'},
        {id:11,name:'Godwin'},
        {id:12,name:'Godwin'},
        {id:13,name:'Godwin'},
        {id:14,name:'Godwin'},
        {id:15,name:'Godwin'},
        {id:16,name:'Godwin'},
        {id:17,name:'Godwin'},
        {id:18,name:'Godwin'},
        {id:19,name:'Godwin'},
        {id:20,name:'Godwin'},
        {id:21,name:'Godwin'},
        {id:22,name:'Godwin'},
        {id:23,name:'Godwin'},
      ]
     const [state,setState] = useState(init)
  
     const alertName = (name) => {
        alert(name)
     }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {
            state.map((item)=> (
            <TouchableOpacity key={item.id} style={styles.item} onPress={()=> alertName (item.name)}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>))
        }
      </ScrollView>
    </View>
  )
}

export default ScrollViewExample

const styles = StyleSheet.create({
  
  list:{
      flex:1,
      paddingVertical:50
  },
  item:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:40,
    margin:2,
    borderColor:'#002',
    borderWidth:2,
    backgroundColor:'#d2f7f1'
  }
})