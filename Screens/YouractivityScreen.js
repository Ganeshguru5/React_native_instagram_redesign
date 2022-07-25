import { View, Text,StyleSheet,TextInput,ScrollView } from 'react-native'
import React from 'react'
import Ion from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
const THEME_COLOR = '#285E29';
export default function YouractivityScreen() {
  return (
    <ScrollView>
    <View style={{padding:15,backgroundColor:"#ffffff"}}>
      <View style={styles.header}>
        <Ion name='arrow-back' color="black" size={20} style={{marginRight:25}}/>
        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Your Activity</Text>
      </View>
      <View style={styles.searchBar}>
        <View style={{flexDirection:'row',backgroundColor:'black',height:0.3}}>
            
        </View>
      </View>
    <View style={{flexDirection:'column',alignItems:'center',marginTop:30}}>
      <Text style={{fontWeight:'bold',fontSize:20,alignItems:'center',color:'black'}}>
        One place to manage your activity
      </Text>
      <Text style={{marginTop:13}}>
        we've added more tools for you to receive and manage your photos , videos , account and activity on instagram.
      </Text>
    </View>

    <View style={styles.searchBar}>
        <View style={{flexDirection:'row',backgroundColor:'black',height:0.3}}>
            
        </View>
      </View>


      <View>
        <View style={styles.menu}>
          <Material name='account-plus-outline' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Time Spent</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>See how much time you usually spend on instagram</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='bell-ring-outline' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Photos and Videos</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>View,archive,or delete photos and videos you've liked</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='lock-open-check-outline' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Interactions</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>Review and delete likes,comments,and your other interactions</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='security' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Account History </Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>Review changes you've made to your account since you created it.</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='advertisements' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Recent Searches</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>Review things you've searched for on instagram and clear your search history</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='account-key-outline' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Links you have visited</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>see which line you've visited recently</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Ion name='help-buoy-sharp' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Archived</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>View and manage content you've archived.</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='information-outline' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Recently deleted</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>View and manage content you've recently deleted</Text>
          </View>
        </View>
        <View style={styles.menu}>
          <Material name='theme-light-dark' color='black' size={20}/>
          <View style={{marginLeft:20}}>
            <Text style={{color:'black',marginLeft:10,fontSize:15}}>Download your information</Text>
            <Text style={{color:'black',marginLeft:10,fontSize:15,width:250,color:'grey'}}>Download the copy of the information you've shared with instagram </Text>
          </View>
        </View>
      </View>

      
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center'
  },
  searchBar:{
    backgroundColor:'#efefef',
    flexDirection:'column',
    borderRadius:10,
    marginTop:20,
},
menu:{
  flexDirection:'row',
  marginVertical:15,
  alignItems:'center'
}
})