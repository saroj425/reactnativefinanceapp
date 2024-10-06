import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {AntDesign, FontAwesome, SimpleLineIcons} from "@expo/vector-icons"
import Colors from '@/constants/Colors'

const Tablayout = () => {
  return (
    <>
      <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor:Colors.grey,
        position:'absolute',
        bottom:5,
        justifyContent:'center',
        alignContent:'center',
        height:63,
        marginHorizontal:10,
        paddingHorizontal:10,
        paddingBottom:8,
        borderRadius:40,
        borderWidth:1,
        borderTopWidth:1,
        borderColor:'#333',
        borderTopColor:'#333'
      },
      // tabBarShowLabel:false,
      tabBarInactiveTintColor:"#999999",
      tabBarActiveTintColor:Colors.white
    }}>
        <Tabs.Screen name='index'options={{
          title: "Home",
          tabBarIcon:({color,size,focused})=>(
            <View style={{padding:12,borderRadius:30, backgroundColor:focused ? Colors.tintColor:Colors.grey}}>
              <SimpleLineIcons name='pie-chart' size={18} color={color}/>
            </View>
          )
        }}/>
        <Tabs.Screen name='profile' options={{
          title:"Profile",
          tabBarIcon:({color,size,focused})=>(
            <View style={{padding:12,borderRadius:30, backgroundColor:focused ? Colors.tintColor:Colors.grey}}>
              <FontAwesome name='user-o' size={18} color={color}/>
            </View>
          )
          }}/>
        <Tabs.Screen name='transection' options={{title:"Transaction",
          tabBarIcon:({color,size,focused})=>(
            <View style={{padding:12,borderRadius:30, backgroundColor:focused ? Colors.tintColor:Colors.grey}}>
              <AntDesign name='swap' size={18} color={color}/>
            </View>
          )
        }}/>
        <Tabs.Screen name='setting' options={{title:"Setting",
          tabBarIcon:({color,size,focused})=>(
            <View style={{padding:12,borderRadius:30, backgroundColor:focused ? Colors.tintColor:Colors.grey}}>
              <FontAwesome name='gear' size={18} color={color}/>
            </View>
          )
        }}/>
    </Tabs>
    <StatusBar barStyle="light-content" />
    </>
  )
}

export default Tablayout