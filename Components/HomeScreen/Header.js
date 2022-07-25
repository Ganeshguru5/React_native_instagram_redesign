import { View, Text, TouchableOpacity,Image,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Fontawsome from 'react-native-vector-icons/FontAwesome'
import {authentication} from '../../firebase'
import {signOut} from'firebase/auth'
export default function Header({navigation}) {
  // const signOut = ()=>{
  //   signOut(authentication)
  //   console.log('Sign out')
  // }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>signOut(authentication)}>
        <Image 
        style={styles.logo} 
        source={require("../../assets/icon/text.png")}/>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
            
            
            <TouchableOpacity style={{marginRight:10}} onPress={()=>{navigation.navigate('PostScreen')}}>
            <Feather name='plus-square' style={{color:"black",fontSize:25}} />
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
              </View>
              
              {/* <Ionic name='send-outline' style={[styles.icon,styles.messageicon]}/> */}
              
              <Fontawsome name='send-o' size={25} color="black"/>
            </TouchableOpacity>

            
            
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:"center",
        flexDirection:'row',
        marginHorizontal:20,
      },
      iconsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',  
      },
      icon:{
        color:'black',
        fontSize:25,
        justifyContent:'space-between',
        marginHorizontal:5
      },
    
      logo:{
        width:130,
        height:60,
        resizeMode:'contain',
      },
      unreadBadge:{
        backgroundColor:'#FF3250',
        position:"absolute",
        height:18,
        width:25,
        borderRadius:25,
        zIndex:1,
        left:10,
        top:-7,
        alignItems:'center',
      },
      unreadBadgeText:{
        color:'white',
        
      },
      
})