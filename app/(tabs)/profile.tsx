import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import Header from '@/components/Header'

const Profile = () => {
  return (
    <>
      {/* <Stack.Screen options={{headerShown:false}}/> */}
      <Stack.Screen options={{header:()=><Header/>}}/>
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </View>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',  
    backgroundColor:Colors.black,
    paddingHorizontal:20,
    color:Colors.white,
  },
  text:{
      fontSize:20,
      color:Colors.white,
  }
})