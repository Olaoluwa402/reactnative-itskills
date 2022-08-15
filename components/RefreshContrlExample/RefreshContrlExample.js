import { StyleSheet, Text, View, RefreshControl, SafeAreaView, ScrollView} from 'react-native'
import React, {useState} from 'react'


const RefreshContrlExample = () => {
  const [refreshing, setRefreshing] = useState(false)
   
  const wait = duration => {
    return new Promise((resolve, reject)=> {
        setTimeout(resolve , duration)
    })
  }

  const onRefresh = React.useCallback(()=> {
     setRefreshing(true) 
     wait(3000).then(()=> setRefreshing(false))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        >
            <Text>Pull to refresh</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RefreshContrlExample

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    scrollView:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
    }
})