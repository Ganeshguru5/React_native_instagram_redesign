import { View, Text,Image,ScrollView } from 'react-native'
import React,{useState,useRef} from 'react'
import Video from 'react-native-video';

export default function SearchContent() {
    const [mute, setMute] = useState(false);
    const videoRef=useRef(null);
    const onBuffer = buffer=>{
      console.log("buffering")
    }
    const onError=error=>{
      console.log("error",error)
    };
    const searchData=[
        {
            id:0,
            images:require('../../assets/Search/image1.webp'),
        },
        {
            id:2,
            images:require('../../assets/Search/image3.webp'),
                
        },
        {
            id:3,
            images:require('../../assets/Search/image4.webp'),  
            
        },
        {
            id:4,
            images:require('../../assets/Search/image5.webp'), 
            
        },
        {
          id:5,
          images:require('../../assets/Search/image6.webp'), 
      },
      {
        id:6,
        images:require('../../assets/Search/image7.webp'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image8.jpg'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image9.webp'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image10.jpg'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image11.jpg'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image12.webp'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image2.webp'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image5.webp'), 
    },

    {
        id:6,
        images:require('../../assets/Search/image3.webp'), 
    },
    {
        id:6,
        images:require('../../assets/Search/image6.webp'), 
    },
        
    ]
    
     
     
    
  return (
    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
    <View style={{width:'100%',height:400,position:'relative'}}>
    <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
          muted={true}
          style={{
            width: '100%',
            height: 700,
            position: 'absolute',
          }}
        />

    </View>
    {
        searchData.map((data,index)=>(
            
            <Image source={data.images} style={{height:130,width:130,borderColor:'white',borderWidth:1}}/>
        ))
    }
    </View>
  )
}