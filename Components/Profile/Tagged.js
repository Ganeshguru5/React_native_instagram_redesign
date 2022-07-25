import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Tagged() {
  return (
    <View style={styles.posts}>
      <View style={styles.post}>
        <Text>1</Text>
      </View>
      <View style={styles.post}>
        <Text>2</Text>
      </View>
      <View style={styles.post}>
        <Text>3</Text>
      </View>
      <View>
        <Text style={styles.post}>4</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    posts:{
      flexDirection:'row',
      flexWrap:"wrap"
    },
    post:{
      width:120,
      height:120,
      backgroundColor:'grey',
      margin:2
    }
  })