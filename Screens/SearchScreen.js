import { View, Text,Image,TextInput,StyleSheet,FlatList,ScrollView} from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import SearchContent from '../Components/SearchScreen/SearchContent'


export default function SearchScreen() {

 

  return (

    
    <View>
      {/* this is for searchbar */}
      <View style={styles.searchBar}>
        <View style={{flexDirection:'row'}}>
            <Ionicon name='ios-search' size={20} style={{marginTop:12,marginLeft:10,marginRight:10}} color="black"/>
            <TextInput 
            placeholder='Search here'
            placeholderTextColor='grey'
            
            />
        </View>
      </View>
      {/* this is for searchBar */}
      <ScrollView style={styles.searchcontent}>
          <SearchContent/>
      </ScrollView>
      {/* this is for posts */}
      <View>
      


      </View>
      {/* this is for posts */}

    </View>
  )
}
const styles=StyleSheet.create({
    searchBar:{
        backgroundColor:'#efefef',
        flexDirection:'column',
        margin:15,
        borderRadius:10,
        height:40
    },
    searchcontent:{
     
    }
})