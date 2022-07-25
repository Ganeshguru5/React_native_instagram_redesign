import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Notification({notification}) {
  return (
    <View style={styles.notification}>
      <View>
       <View style={styles.main}>
        <Image source={notification.image} style={styles.profile}/>
        <Text style={styles.msg}><Text style={{fontWeight:'bold'}}>{notification.user}</Text>{notification.action}</Text>

        <TouchableOpacity style={styles.follow}>
            <Text style={{margin:16,color:"white",marginVertical:10}}>Follow</Text>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    profile:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    },
    main:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        marginVertical:30
        
    },
    msg:{
        color:'black',
        width:200
    },
    notification:{
        
        
        borderRadius:10,
        marginBottom:10,
        backgroundColor:'white'
        
    },
    follow:{
        backgroundColor:'#0095f6',
        borderRadius:10,
        
    }
    

})