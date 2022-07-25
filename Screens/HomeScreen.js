import { View, Text,ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Stories from '../Components/HomeScreen/Stories'
import Post from '../Components/HomeScreen/Post'
import Header from '../Components/HomeScreen/Header'
import { USERS } from '../Data/users'

export default function HomeScreen({navigation}) {
  return (
    <View style={{backgroundColor:"#F0F0F0"}}>
      <StatusBar backgroundColor="#F0F0F0"/>
      <Header navigation={navigation}/>
      <ScrollView>
      <Stories navigation={navigation}/>
      {USERS.map((post,index)=>(
        <Post post={post} key={index}/>
      ))}
      </ScrollView>
    </View>
  )
}