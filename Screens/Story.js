import { View, Text, StatusBar,Image,Animated } from 'react-native'
import React,{useState,useEffect} from 'react'

export default function Story({data,navigation}) {
  const [progress,setProgres]=useState(new Animated.Value(0));

  useEffect(()=>{
    let timer=setTimeout(()=>{
      navigation.goBack();
    },5000)
    Animated.timing(progress,{
      toValue:5,
      duration:5000,
      useNativeDriver:false,
    })
  },[])
  const progressAnimation = progress.interpolate({
    inputRange:[0,5],
    outputRange:["0%","100%"]
  })
  return (
    <View
    style={{
      backgroundColor:"black",
      height:"100%",
      position:'relative',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
      <StatusBar backgroundColor="black" />
      <View 
      style={{
        height:3,
        width:"95%",
        borderWidth:1,
        backgroundColor:'grey',
        position:'absolute',
        top:18

      }}>
        <View style={{
          height:'100%',
          backgroundColor:'white',
          width:"50%",
        }}>

        </View>
        <View>
          <Image source={require("../assets/Search/image1.webp")}
          style={{
            width:"100%",
            
          }}
          />
        </View>

      </View>
    </View>
  )
}