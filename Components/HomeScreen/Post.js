import { View, Text ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { USERS } from '../../Data/users'


export default function Post({post}) {

  const [like,setlike]=useState('hearto')
  const [color,setcolor]=useState('black')

  return (
    <View style={{marginBottom:43}}>
      <View>
        <View style={styles.postProf}>
          {/*  this is head */}
          <View style={styles.postHeader}>
            <View style={styles.card}>
              <Image source={post.image} style={styles.postprofile}/>
              <Text style={{color:'black',fontWeight:'bold',marginLeft:8,marginBottom:3}}>{post.user}</Text>
            </View>
            <View>
              <Ionic name='ellipsis-vertical' style={{color:'black',fontSize:18,marginRight:10,marginTop:20}}/>
            </View>
          </View>
        {/* this is for caption */}
        <View style={styles.caption}>
          <View>
            <Text style={{color:"black"}}>This was perty awsome !!!</Text>
          </View>

        </View>

      {/* this is for caption */}
          {/*  this is post */}
          <View style={{paddingHorizontal:25}}>
            <View>
            <Image source={post.post[0]} style={styles.post}/>
            </View>
          </View>
        {/* this is for like */}
        <View style={styles.postfooter}>
          <View style={styles.card}>
          <TouchableOpacity onPress={()=>{
            if(like=='hearto'){
              setlike("heart")
              setcolor('#ed4956')
            }
            else if(like=="heart"){
              setlike("hearto") 
              setcolor('black')
            }

          }}>
          <Icon name={like} size={25} color={color} style={{marginRight:17}}/> 
          
          </TouchableOpacity>

          <TouchableOpacity>
          <Ionic name='chatbubble-outline' size={25} style={{color:"black",marginRight:17,}}/> 
         
          </TouchableOpacity>

          <TouchableOpacity>
          <Feather name='send' size={25} color='black' style={{marginRight:7}}/>
          
          </TouchableOpacity>
          </View>

          <View>
              <Ionic name='ellipsis-vertical' style={{color:'black',fontSize:18,marginRight:10,marginTop:20}}/>
          </View>
        </View>

          {/* this is for likes */}
         <View  style={styles.liked}>
            <View>
            <Text style={{fontWeight:'bold',color:'grey'}}>Liked by ganez and 39K others</Text>
            </View>
            
         </View>

          {/* this is for caption */}
         {/* <View style={styles.caption}>

            <View>
            <Text style={{fontWeight:'bold',color:"black"}}>{post.user} </Text>

            </View>
            <View>
            <Text style={{color:"black"}}>This was perty awsome !!!</Text>
            </View>
            
         </View> */}

          {/* this is for caption */}
         <View style={[styles.caption,{marginBottom:30}]} >

           <View>
            <Text style={{color:'grey'}}>View all comments</Text>
           </View>
            
         </View>

       </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  postHeader:{
    flexDirection:'row',
    
    marginLeft:10,
    
},
card:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginRight:160,
  marginTop:20
},
liked:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginLeft:0,
  marginRight:90,
  marginTop:-18,
  paddingHorizontal:25,
  marginBottom:10  
},
caption:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  marginLeft:0,
  marginRight:35,
  marginTop:10,
  paddingHorizontal:25,
  
  
},
  postprofile:{
    width:40,
    height:40,
    borderRadius:50,
    marginRight:0,
    borderWidth:1.5,
    
},
postProf:{
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'flex-start',
  backgroundColor:'white',
  marginHorizontal:20,
  borderRadius:25
  
},
post:{
  width:300,
  height:300,
  marginTop:10,
  
},
postfooter:{
  flexDirection:'row',
  marginBottom:23,
  paddingHorizontal:25
  
},

})