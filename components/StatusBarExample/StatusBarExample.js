import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView, Button} from 'react-native'
import React, {useState} from 'react'

const statusStyle = ['default', 'dark-content', 'light-content']
const transitionStyle = ['fade', 'slide', 'none']

const StatusBarExample = () => {
    const [hidden, setHidden] = useState(false)
    const [statusBarStyle, setStatusBarStyle] = useState(statusStyle[0])
    const [statusBarTransition, setStatusBarTransition] = useState(transitionStyle[0])

    const changeStatusBarVisibilty = ()=> setHidden((prev)=> !prev)

    const changeStatusBarStyle = ()=> {
        const styleId = statusStyle.indexOf(statusBarStyle) + 1

        if(styleId === statusStyle.length){
            setStatusBarStyle(statusStyle[0])
        }else{
            setStatusBarStyle(statusStyle[styleId])
        }
    }

    const changeStatusBarTransition = ()=> {
        const transitionId = transitionStyle.indexOf(statusBarTransition) + 1

        if(transitionId === transitionStyle.length){
            setStatusBarTransition(transitionStyle[0])
        }else{
            setStatusBarTransition(transitionStyle[transitionId])
        }
    }
  return (
    <View style={styles.container}>
        <StatusBar 
            animated={true} 
            barStyle={statusBarStyle} 
            showHideTransition={statusBarTransition}
            backgroundColor='#61dafb'
            hidden={hidden}
            />
          <Text style={styles.textStyle}>StatusBar Visibility: {hidden ? 'Visible': 'Hidden'}</Text>
          <Text style={styles.textStyle}>StatusBar style: {statusBarStyle}</Text>
          <Text style={styles.textStyle}>StatusBar transition: {statusBarTransition}</Text>

          <View style={styles.btnContainer}>
          <Button title='toggle visibility property' onPress={changeStatusBarVisibilty}/>
            <Button title='toggle statusBar style property' onPress={changeStatusBarStyle}/>
          {
            Platform.OS === 'ios' ? (
                <Button title='toggle statusBar transitions property' onPress={changeStatusBarTransition}/>
            ) : null
          }
          </View>
         
    </View>
  )
}

export default StatusBarExample

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#ECF781'
    },
    textStyle:{
        alignItems:'center',
        marginBottom:8
    },
    btnContainer:{
        padding:10
    }
})