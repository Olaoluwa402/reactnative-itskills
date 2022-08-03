import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChildComponent = ({state,updateHandler}) => {
  return (
    <View>
      <Text onPress={updateHandler}>{state.myState}</Text>
    </View>
  )
}

export default ChildComponent

const styles = StyleSheet.create({})