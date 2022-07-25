import { View, Text,SafeAreaView ,StyleSheet} from 'react-native'
import React from 'react'

import SignUpForm from '../Components/SignUp/SignUpForm'
export default function SignUpScreen({navigation}) {
  return (
    <SafeAreaView style={style.screen}>
     <View>
      <SignUpForm navigation={navigation} />
    </View>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    
})