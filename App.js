import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import NotificationScreen from './Screens/NotificationScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SearchScreen from './Screens/SearchScreen'
import { SignOutStack } from './Stack'
import TobTab from './Components/Profile/TobTab'
import AuthNavigation from './AuthNavigation'

export default function App() {
  return <AuthNavigation />  
}