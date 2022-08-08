import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

const ActivityIndicatorExaple = () => {
  return (
    <View>
      <ActivityIndicator size='small'/>
      <ActivityIndicator size='large' color='#234676'/>
      <ActivityIndicator  />
    </View>
  )
}

export default ActivityIndicatorExaple

const styles = StyleSheet.create({})