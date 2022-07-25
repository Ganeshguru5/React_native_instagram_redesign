import { View, Text,Image,TextInput,Switch } from 'react-native'
import React,{useState} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function PostScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flexDirection:'column',margin:20}}>
      {/* this is for header */}
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Ionicons name='arrow-back-sharp' size={24} color="black"/>
        <Text style={{color:"black",fontSize:18,fontWeight:'bold',marginLeft:20}}>New Post</Text>
      </View>
      {/* this is for header */}

      {/* this is for upload post */}
      <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between',marginBottom:14}}>
        <View style={{flexDirection:'row'}}>
        <Image source={require("../assets/Profiles/ga_nez_.jpg")} style={{width:50,height:50,borderRadius:50}}/>
        <TextInput 
        placeholder='Write the caption'
        placeholderTextColor="grey"
        />
        </View>
        <Image source={require("../assets/Profiles/ga_nez_.jpg")} style={{width:50,height:50}}/>
      </View>
      {/* this is for upload post */}
      <View style={{backgroundColor:'black',height:0.182}}></View>
      {/* this is for location */}
      <View style={{flexDirection:'column'}}>
        <Text style={{color:'black',fontWeight:'400',marginVertical:20,fontSize:15}}>Tag people</Text>
        <Text style={{color:'black',fontWeight:'400',marginBottom:10,fontSize:15}}>Add location</Text>
        <View style={{flexDirection:'row'}}>
        <View style={{alignItems:'center',color:'black',backgroundColor:'white',margin:3,padding:6,marginBottom:10,width:130,borderRadius:10}}>
          <Text style={{color:'black',fontSize:13}}>New York</Text>
          
        </View>
        <View style={{alignItems:'center',color:'black',backgroundColor:'white',margin:3,padding:6,marginBottom:10,width:130,borderRadius:10}}>
          <Text style={{color:'black',fontSize:13}}>Sanfrancisco</Text>
          
        </View>
        </View>
      </View>
      {/* this is for location */}
      <View style={{backgroundColor:'black',height:0.4}}></View>
      {/* this is for add music */}
      <View>
      <Text style={{color:'black',fontWeight:'400',marginVertical:20,fontSize:15}}>Add music</Text>
      <View style={{flexDirection:'row'}}>
        <View style={{alignItems:'center',color:'black',backgroundColor:'white',margin:3,padding:6,marginBottom:10,width:130,borderRadius:10}}>
          <Text style={{color:'black',fontSize:13}}>Stay -Justin Biber</Text>
          
        </View>
        <View style={{alignItems:'center',color:'black',backgroundColor:'white',margin:3,padding:6,marginBottom:10,width:130,borderRadius:10}}>
          <Text style={{color:'black',fontSize:13}}>Lost without you</Text>
          
        </View>
        </View>
      </View>
      {/* this is for add music */}
      <View style={{backgroundColor:'black',height:0.4}}></View>

      <View>
        <Text style={{color:'black',fontWeight:'400',fontSize:15,marginVertical:20}}>Also post to </Text>
        <View>
        <Text style={{color:'black',fontWeight:'400',fontSize:15}}>Tumbler</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
        </View>
        <View>
        <Text style={{color:'black',fontWeight:'400',fontSize:15}}>Facebook</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
        </View>
        <View>
        <Text style={{color:'black',fontWeight:'400',fontSize:15}}>Twitter</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
        </View>
        <View>
        <Text style={{color:'black',fontWeight:'400',fontSize:15}}>Advance settings</Text>
           
        </View>
        <View>

        </View>
      </View>
    </View>
  )
}