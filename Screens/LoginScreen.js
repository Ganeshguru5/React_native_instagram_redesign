import { View, Text,SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'
import LoginForm from '../Components/Login/LoginForm'

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={style.screen}>
     <View>
      <LoginForm navigation={navigation}/>
    </View>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    
})