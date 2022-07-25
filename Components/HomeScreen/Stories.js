import { View, Text,Image,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import  {USERS}  from '../../Data/users';
import LinearGradient from 'react-native-linear-gradient';
import {db} from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

export default function Stories({navigation}) {
  
  const GetData=async ()=>{
    const usersCol = collection(db,'Users');
    const userSnapshot = await getDocs(usersCol)
    const userList = userSnapshot.docs.map(doc=>doc.data());

    console.log(userList)
  }

  return (
    <View style={{marginBottom:13,justifyContent:'center',alignItems:'center',marginLeft:12}}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
        
            <View>
               <Image source={require("../../assets/Profiles/ga_nez_.jpg")} style={style.addstory}/> 
               <Text style={{color:"black",fontSize:12,textAlign:'center'}}>Your story</Text>
            </View>
            
            {USERS.map((story,index)=>(
              <TouchableOpacity style={style.indisto} onPress={()=>{navigation.navigate('Story'),data={
                name:story.image,
                
              }}}>
                <LinearGradient
              start={{x:0,y:0}}
              end={{x:1,y:1}}
              colors={['red','#e80f9f','yellow']}
              // colors={['red','#d301c5','yellow']}
              // '#E1B74E','#D12B7D','#D0411F'
              style={{borderRadius:30,padding:2.8}}
              >
                <Image source={story.image} style={style.story} key={index}/> 
                </LinearGradient>
                <Text style={{color:"black",fontSize:12,textAlign:'center',fontWeight:'bold'}}>{story.user}</Text>
             </TouchableOpacity>
            ))}   
        
        
        </ScrollView>
    </View>
  )
}

const style= StyleSheet.create({
    addstory:{
        width:70,
        height:70,
        borderRadius:30, 
        borderWidth:2,
        marginTop:12  
    },
    story:{
        width:70,
        height:70,
        borderRadius:30,
        borderWidth:2,
        borderColor:'white',    
    },
    indisto:{
        justifyContent:'center',
        alignItems:'center',
        width:85,
        height:85,
        marginTop:10,
        marginBottom:3,
      }

})