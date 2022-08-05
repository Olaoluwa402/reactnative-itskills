import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect,useState} from 'react'

export default function FetchExample() {
    const [state, setState] = useState([]);

    useEffect(()=> {
        fetchAPI()
    }, [])

    const fetchAPI = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const config = {
            headers:{
                "Content-Type":"apllication/json",
            }
        }
        console.log('hit bhere')
        fetch(url, config)
        .then((response)=> response.json())
        .then((data)=> {
            const first20data = data.slice(0,19);
            setState(first20data)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <>
    <View style={styles.header}>
        <Text style={{color:'#fff', textAlign:'center'}}>Header</Text>
    </View>
    <ScrollView style={styles.list}>
      {
        state && state.length > 0 
        ? state.map((item)=> (
        <View key={item.id} style={styles.item}><Text style={styles.itemText}>{item.title}</Text></View>
        )) 
        : (<View><Text style={styles.noData}>Data yet to be fetched</Text></View>)
      }
    </ScrollView>
    <View style={styles.footer}>
        <Text style={{color:'#fff', textAlign:'center'}}>Footer</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    header:{
        marginTop:40,
        width:'100%',
        height:45,
        backgroundColor:'#002',
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
        backgroundColor:'#002',
        justifyContent:'center',
        alignItems:'center'
    }

})