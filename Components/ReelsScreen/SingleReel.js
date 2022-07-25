import { View, Text, Dimensions,TouchableOpacity,Image } from 'react-native'
import React,{useRef,useState} from 'react'
import Video from 'react-native-video';
import { FastField } from 'formik';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import Encyto from "react-native-vector-icons/Entypo"
export default function SingleReel({item,index,currentIndex}) {
  const windowwidth = Dimensions.get('window').width;
  const windowheight = Dimensions.get('window').height;

  const [mute, setMute] = useState(false);
  const videoRef=useRef(null);
  const onBuffer = buffer=>{
    console.log("buffering")
  }
  const onError=error=>{
    console.log("error",error)
  };

  return (
    <View style={{width:windowwidth,height:windowheight,position:'relative'}}>
      
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={{uri: item.video}}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <View style={{position:'absolute',left:340,top:500}}>
        <View style={{marginBottom:20}}>
        <AntDesign name='hearto' size={23} color="white" />
        <Text style={{color:"white",fontSize:13}}>{item.likes}</Text>
        </View>
        <View style={{marginBottom:20}}>
        <AntDesign name='message1' size={23} color="white" />
        <Text style={{color:"white"}}>345</Text>
        </View>
        <View style={{marginBottom:20}}>
        <Feather name="send" size={25} color="white"/>
        </View>
        <Encyto name='dots-three-vertical' size={23} color="white"/>
      </View>
      <View style={{marginTop:50,marginLeft:10,flexDirection:'row',alignItems:'center'}}>
        <Image source={item.image} style={{width:40,height:40,borderRadius:50,borderWidth:3,borderColor:"darkviolet"}}/>
        <Text style={{color:'white',fontWeight:'bold',marginLeft:10}}>@Textrer</Text>
      </View>
      <View style={{position:'absolute',left:10,top:700}}>
        <Text style={{color:'white'}}>{item.title}</Text>
      </View>
    </View>
  )
}