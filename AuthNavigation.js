import { View, Text } from 'react-native'
import React,{useEffect,useState} from 'react'
import { SignInStack,SignOutStack } from './Stack'
import {db,authentication} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'


export default function AuthNavigation() {
  
  const [currentUser,setCurrentUser]=useState(null)
  useEffect(()=>{
    onAuthStateChanged(authentication,user=>{
      if(user){
        setCurrentUser(user)
      }
      else{
        setCurrentUser(null)
      }
    })
  })

  if(currentUser){
    return(
      <SignInStack />
    )
  }
  else{
    return(
      <SignOutStack />
    )
  }
}