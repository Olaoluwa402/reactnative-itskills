import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React, {useEffect,useState} from 'react'
import axios from 'axios';
import IconsExample from '../Icons/IconsExample';


export default function AxiosFlatlist() {
    const [state, setState] = useState([]);

    useEffect(()=> {
        axiosAPI()
    }, [])

    const axiosAPI = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const config = {
            headers:{
                "Content-Type":"apllication/json",
            }
        }
        try{
             const {data} = await axios.get(url, config);
             console.log(data)
             setState(data)
        }catch(err){
            console.log(err)
        }
     
    }
  return (
    <>
    <View style={styles.header}>
        <Text style={{color:'#fff', textAlign:'center'}}>Header</Text>
    </View>
    <FlatList 
     data={state}
     renderItem={({item})=> (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            </View>
        )}
     keyExtractor={(item)=> item.id}
    />
    {/* <ScrollView style={styles.list}>
      {
        state && state.length > 0 
        ? state.map((item)=> (
        <View key={item.id} style={styles.item}><Text style={styles.itemText}>{item.title}</Text></View>
        )) 
        : (<View><Text style={styles.noData}>Data yet to be fetched</Text></View>)
      }
    </ScrollView> */}
    <View style={styles.footer}>
        <IconsExample />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:40,
        width:'100%',
        height:45,
        backgroundColor:'#782203',
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        width:'85%',
        margin:20,
        padding:10,
        backgroundColor:'green'
    },
    itemText:{
       color:'#fff'
    },
    footer:{
        width:'100%',
        height:45,
        backgroundColor:'#782203',
        justifyContent:'center',
        alignItems:'center'
    }

})