import { StyleSheet, Text, View, Switch } from 'react-native'
import React,{useState} from 'react'

const SwitchExample = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const handleSwitch = ()=> {
    setIsEnabled((prevState)=> !prevState)
  }

  return (
    <View style={[styles.container, {backgroundColor: isEnabled ? 'green': 'black'}]}>
      <Switch 
        trackColor={{false:'#767577', true:'#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={handleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default SwitchExample

const styles = StyleSheet.create({
  container:{
     height:500,
  }
})
