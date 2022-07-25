import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import Ion from 'react-native-vector-icons/Ionicons'
import Notification from '../Components/Notifications/Notification'
import {NOTIFICATIONS} from '../Data/notifiydata'

export default function NotificationScreen() {
  return (
    <View style={{backgroundColor:'#F0F0F0'}}>
      <View style={{margin:14,backgroundColor:'#F0F0F0'}}>
      <View style={{marginBottom:30}}>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>Notifications-ting ting <Ion name='ios-notifications-outline' size={16}  color="black"/></Text>
      </View>
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
    <View style={{marginBottom:15}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Today</Text>
    </View>
      <View>
        {NOTIFICATIONS.map((notification,index)=>(
            <Notification notification={notification} key={index}/>
        ))}
      </View>
      <View  style={{marginBottom:15}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Yesterday</Text>
    </View>
      <View>
        {NOTIFICATIONS.map((notification,index)=>(
            <Notification notification={notification} key={index}/>
        ))}
      </View>
      <View  style={{marginBottom:15}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Earlier</Text>
    </View>
      <View>
        {NOTIFICATIONS.map((notification,index)=>(
            <Notification notification={notification} key={index}/>
        ))}
      </View>
      </ScrollView>
    </View>
    </View>
  )
}