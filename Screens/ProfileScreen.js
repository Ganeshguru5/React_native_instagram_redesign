import { View, Text,StyleSheet,ScrollView,Animated ,TouchableOpacity,Image} from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import Myprofile from '../Components/Profile/Myprofile'
import TobTab from '../Components/Profile/TobTab'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Material from "react-native-vector-icons/MaterialIcons"
import Materialcom from 'react-native-vector-icons/MaterialCommunityIcons'
import {BottomSheet,ListItem,Input} from 'react-native-elements'
import Ion from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import Ant from 'react-native-vector-icons/AntDesign'
import Fontawsome from 'react-native-vector-icons/FontAwesome5'
import { collection, getDocs,doc,setDoc,getDoc } from 'firebase/firestore/lite';
import {db,authentication} from '../firebase'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';

export default function ProfileScreen({navigation}) {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  let [userData,setuserData]=useState({})
  useEffect(()=>{
  (async ()=>{
    const userDoc = doc(db,'Users',authentication.currentUser.email);
    const data=(await getDoc(userDoc)).data()
    console.log("I am executed")
    // userData.username=data.username;
    setuserData({
      'username':data.username,
      'followers':data.followers,
      'following':data.following,
    })
   }) ();
 },[]);

 



  return (
    <ScrollView style={styles.screen}>
       
    <View>
    <View>
      {/* this is for header */}

      <View style={styles.header}>
        
        <Text style={{color:"black",fontSize:20,fontWeight:'bold',}}>{userData.username}<Material name='verified' size={15} color="#0095f6"/></Text>
        <View style={{flexDirection:'row'}}>
        <Feather name='plus-square' style={{color:"black",fontSize:25,marginRight:12}} />
        {/* <TouchableOpacity>
          
        <Octicons name='three-bars' style={{color:"black",fontSize:25}}/>
        </TouchableOpacity> */}
        </View>
      </View>

      {/* this is for header */}

      {/* this is for profile */}

      <View style={styles.profile}>
        
        <Image source={require("../assets/Profiles/ga_nez_.jpg")} style={styles.profilepic}/>
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
      <View style={{width:"100%",backgroundColor:'white',height:0.6,marginTop:20}}></View>
      
      <View style={{ height: 500 }}>
      <TobTab/>
      
      </View>
      <View style={{flex:1, backgroundColor: '#f3f3f3',position:'relative',bottom:220}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="white" icon={<Materialcom name='apple-keyboard-option' style={{color:"black",fontSize:25}}/>}>
          <ActionButton.Item buttonColor='white' title="Settings" onPress={() => {navigation.navigate("SettingsScreen")}}>
          <Ion name='settings-outline' size={23} color="black"/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='white' title="Archieve" onPress={() => {}}>
          <Entypo name='back-in-time' size={23} color="black"/> 
          </ActionButton.Item>
          <ActionButton.Item buttonColor='white' title="Activity" onPress={() => {}}>
          <Feather name='activity' size={23} color="black"/>
          </ActionButton.Item>
          
        </ActionButton>
      </View>
      
    </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    screen:{
      padding:10,
      backgroundColor:"white",
      flex:2,
    },
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