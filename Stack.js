import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from './Screens/HomeScreen'
import ProfileScreen from './Screens/ProfileScreen'
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'
import SearchScreen from './Screens/SearchScreen'
import ReelsScreen from './Screens/ReelsScreen'
import NotificationScreen from './Screens/NotificationScreen'
import Ionic from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialIcons'
import Fontawsome from 'react-native-vector-icons/FontAwesome'
import PostScreen from './Screens/PostScreen'
import SettingsScreen from './Screens/SettingsScreen'
import TobTab from './Components/Profile/TobTab'
import ArchiveScreen from './Screens/ArchiveScreen'
import YouractivityScreen from './Screens/YouractivityScreen'
import QrcodeScreen from './Screens/QrcodeScreen'
import ClosefriendsScreen from './Screens/ClosefriendsScreen'
import Story from './Screens/Story'

const tab=createBottomTabNavigator()
const Tabs = () =>{
  return(
    <tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarStyle: {
        height: 50,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: 'white',
        position: 'absolute',
        bottom:30,
        left:13,
        right:13,
        borderTopWidth: 0.2,
        borderTopColor:'grey',
        borderRadius:20,
        paddingBottom:10,
        paddingTop:10,
        height:70,
    },  
    }}

    barStyle={{ backgroundColor: 'white' }}

    tabBarOptions={{
      showLabel:false,
      style:{
        height:200,
        backgroundColor:'white'
      }
    }}
    >
    <tab.Screen 
      name='HomeScreen' 
      component={HomeScreen}
      options={{
        tabBarIcon:({focused})=>(
          <View>
          {/* <Ionic name='home-outline' style={{color:"white",fontSize:25}}/> */}
          <AntDesign name='home' color={'black'} size={30}/>
         
          </View>
        ) 
       }}
      />
    <tab.Screen 
      name='SearchScreen' 
      component={SearchScreen}
      options={{
        tabBarIcon:({focused})=>(
          <View>
          <Ionic name='search-outline' style={{color:"black",fontSize:25}}/>

          </View>
        ) 
       }}
      />
    <tab.Screen 
      name='ReelsScreen' 
      component={ReelsScreen} 
      options={{
        tabBarIcon:({focused})=>(
          <View>
          <Fontawsome name='camera-retro' style={{color:"black",fontSize:25}}/>

          </View>
        ) 
       }}
      />
    <tab.Screen 
      name='Notifications' 
      component={NotificationScreen}
      options={{
        tabBarIcon:({focused})=>(
          <View>
          <Icon name='hearto' style={{color:"black",fontSize:25}}/>

          </View>
        ) 
       }}
      />
    <tab.Screen 
      name='ProfileScreen' 
      component={ProfileScreen}/>
    
  </tab.Navigator>
  )
}




const Stack=createNativeStackNavigator();

const screenOptions={
    headerShown:false
}

function SignInStack() {
  return (
    <NavigationContainer 
    independent={true}
    >
        <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={Tabs} />
            <Stack.Screen name='PostScreen' component={PostScreen} />
            <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
            <Stack.Screen name='ArchiveScreen' component={ArchiveScreen} />
            <Stack.Screen name='YouractivityScreen' component={YouractivityScreen} />
            <Stack.Screen name='QrcodeScreen' component={QrcodeScreen} />
            <Stack.Screen name='ClosefriendsScreen' component={ClosefriendsScreen} />
            <Stack.Screen name='Story' component={Story}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}


function SignOutStack() {
  return (
    <NavigationContainer 
    independent={true}
    >
        <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={screenOptions}
        >
            <Stack.Screen name='LoginScreen'  component={LoginScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export {SignInStack,SignOutStack}

