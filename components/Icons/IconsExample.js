import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const IconsExample = () => {
  return (
    <View style={{flexDirection:'row'}}>
        <View>
            <FontAwesome5 name='home' />
            <Text>Home</Text>
        </View>
        <View>
            <FontAwesome5 name='user' />
            <Text>User</Text>
        </View>
        <View>
            <FontAwesome5 name='search' />
            <Text>Search</Text>
        </View>
    </View>
  )
}

export default IconsExample

const styles = StyleSheet.create({})