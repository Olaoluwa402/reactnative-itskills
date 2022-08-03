import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const initState = {
        myState:'This is our default state'
      }
      const [state, setState] = useState(initState)
    
      const updateHandler = ()=> {
        setState({myState: 'This is the update state'})
      }
    
  return (
    <View>
    <ChildComponent state={state} updateHandler={updateHandler}/>
  </View>
  )
}

export default ParentComponent

