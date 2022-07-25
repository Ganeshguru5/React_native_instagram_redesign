import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import Ion from "react-native-vector-icons/Ionicons"
import Material from "react-native-vector-icons/MaterialCommunityIcons"
export default function SettingsScreen() {
  return (
    <View style={{padding:15,backgroundColor:"#ffffff"}}>
      <View style={styles.header}>
        <Ion name='arrow-back' color="black" size={20} style={{marginRight:25}}/>
        <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>Settings</Text>
      </View>
      <View style={styles.searchBar}>
        <View style={{flexDirection:'row'}}>
            <Ion name='ios-search' size={20} style={{marginTop:12,marginLeft:10,marginRight:10}} color="black"/>
            <TextInput 
            placeholder='Search'
            />
        </View>
      </View>

      <View>
        <View style={styles.menu}>
          <Material name='account-plus-outline' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Follow and Invite friends </Text>
        </View>
        <View style={styles.menu}>
          <Material name='bell-ring-outline' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Notifications </Text>
        </View>
        <View style={styles.menu}>
          <Material name='lock-open-check-outline' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Privacy </Text>
        </View>
        <View style={styles.menu}>
          <Material name='security' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Security </Text>
        </View>
        <View style={styles.menu}>
          <Material name='advertisements' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Ads</Text>
        </View>
        <View style={styles.menu}>
        <Material name='account-key-outline' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Account </Text>
        </View>
        <View style={styles.menu}>
        <Ion name='help-buoy-sharp' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Help </Text>
        </View>
        <View style={styles.menu}>
        <Material name='information-outline' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>About </Text>
        </View>
        <View style={styles.menu}>
        <Material name='theme-light-dark' color='black' size={20}/>
          <Text style={{color:'black',marginLeft:10,fontSize:15}}>Theme </Text>
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View style={{flexDirection:'row'}}>
        <Ion name='md-infinite' color="#0065e1" size={19}/>
        <Text style={{color:'#1c2931',fontWeight:'bold'}}> Ganez</Text>
        </View>
        
        <Text style={{color:"#129cf6",marginTop:7}}>Account center</Text>
        <Text style={{color:'#a7a7a7',marginTop:7}}>Control settings for connected experiences across instagram , the Ganez app
          and messenger , including story and post sharing and logging in.
        </Text>
      </View>
    </View>
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