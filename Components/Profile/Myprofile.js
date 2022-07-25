import { View, Text,StyleSheet,Image,TouchableOpacity, Animated} from 'react-native'
import React,{useEffect,useState} from 'react'
import Ionicon from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialIcons"
import color from '../../colors'
import TobTab from './TobTab'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { collection, getDocs,doc,setDoc,getDoc } from 'firebase/firestore/lite';
import {db,authentication} from '../../firebase'



export default function Myprofile() {
  let [userData,setuserData]=useState({})

  useEffect(async ()=>{
    const userDoc = doc(db,'Users',authentication.currentUser.email);
    const data=(await getDoc(userDoc)).data()
    console.log()
    // userData.username=data.username;
    setuserData({
      'username':data.username,
      'followers':data.followers,
      'following':data.following,
    })
    console.log('I ma ')
   })

//  async ()=>{
//   const userDoc = doc(db,'Users',authentication.currentUser.email);
//   const data=(await getDoc(userDoc)).data()
//   console.log()
//   // userData.username=data.username;
//   setuserData({
//     'username':data.username,
//     'followers':data.followers,
//     'following':data.following,
//   })
//   console.log('I ma ')
//  }
 
 
  
 

 const [animationValue,SetAnimationValue] = useState(-1000)
 const showAnimation = userRef(new Animated.Value(animationValue)).current;
 const startAnimation =()=>{
  const val = animationValue ===0?-1000:0;
  Animated.timing(showAnimation,{
    useNativeDriver:false,
    toValue:"",
    duration:350
  })
 }

  return (
    
    <View>
      {/* this is for header */}

      <View style={styles.header}>
        
        <Text style={{color:"black",fontSize:20,fontWeight:'bold'}}>{userData.username}<Material name='verified' size={15} color="#0095f6"/></Text>
        <View style={{flexDirection:'row'}}>
        <Feather name='plus-square' style={{color:"black",fontSize:25,marginRight:12}} />
        <TouchableOpacity onPress={()=>{
          startAnimation();
        }}>
        <Octicons name='three-bars' style={{color:"black",fontSize:25}}/>
        </TouchableOpacity>
        </View>
      </View>

      {/* this is for header */}

      {/* this is for profile */}

      <View style={styles.profile}>
        
        <Image source={require("../../assets/Profiles/ga_nez_.jpg")} style={styles.profilepic}/>
        <Text style={{color:'black',marginVertical:5}}>➽ கணேஷ்குரு 🥀</Text>
        <Text style={{color:'black',marginVertical:5}}>➿</Text>
        <TouchableOpacity style={styles.edit}>
            <Text style={{margin:5,color:'black'}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* this is for profile */}

      {/* this is for followers */}

      <View style={styles.followers}>
        <View style={styles.con}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>0</Text>
            <Text style={{color:'black'}}>Posts</Text>
        </View>
        <View style={styles.con}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>{userData.followers}</Text>
            <Text style={{color:'black'}}>Followers</Text>
        </View>
        <View style={styles.con}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>{userData.following}</Text>
            <Text style={{color:'black'}}>Following</Text>   
        </View>
      </View>

      {/* this is for followers */}
      
    </View>
  )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
        justifyContent:'space-between'
    },
    profilepic:{
        width:90,
        height:90,
        borderRadius:30,
        borderColor:"grey",
        borderWidth:0.2,
        marginBottom:10
    },
    profile:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    edit:{
        borderRadius:10,
        borderColor:"black",
        borderWidth:1,        
    },
    followers:{
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-evenly',
        marginTop:20
    },
    con:{
        alignItems:'center'
    }
})