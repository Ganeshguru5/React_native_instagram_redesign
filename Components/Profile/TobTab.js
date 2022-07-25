import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mypost from './Mypost';
import Tagged from './Tagged';
import Ion from "react-native-vector-icons/Ionicons"


const Tab=createMaterialTopTabNavigator()



export default function TobTab() {
  
  return (
    <>
    <Tab.Navigator
        initialRouteName='Home' 
        screenOptions={{
          tabBarActiveTintColor:'black',
          
        }}    
    >
        <Tab.Screen 
            name='Mypost'
            component={Mypost}
            options={{
              title:()=>(
                <View>
                  <Ion name='grid' size={20} color="black"/>
                </View>
              )
            }}
        />
        <Tab.Screen 
            name='Tagged'
            component={Tagged}
            options={{
              title:()=>(
                <View>
                  <Ion name='people' size={20} color="black"/>
                </View>
              )
            }}
        />

        

    </Tab.Navigator>
    
    </>
  )
}