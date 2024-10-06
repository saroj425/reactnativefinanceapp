import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import Header from '@/components/Header'

const Transections = () => {
  return (
    <>
      {/* <Stack.Screen options={{headerShown:false}}/> */}
      <Stack.Screen options={{header:()=><Header/>}}/>
      <View style={styles.continer}>
        <Text style={styles.text}>Transections</Text>
      </View>
    </>
  )
}

export default Transections
const styles = StyleSheet.create({
    continer:{
      flex:1,
      backgroundColor:Colors.black,
      justifyContent:"center",
      alignItems:'center',
    },
    text:{
      color:Colors.white,
      fontSize:20
    }
})