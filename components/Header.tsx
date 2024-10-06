import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.userInfowrapper}>
                <Image source={require('../assets/images/beta.jpg')} style={styles.image} />
                <View style={styles.userTextwrapper}>
                    <Text style={styles.textUpper}> Hi, Saroj </Text>
                    <Text style={styles.textLower}> Your <Text style={{fontWeight:700}}>Budget</Text> </Text>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{}} style={styles.buttonWrapper}>
                <Text style={styles.buttonTextWrapper}>
                        My transection
                </Text>
            </TouchableOpacity>           
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.black,
        paddingTop:10
    },
    wrapper:{
        flexDirection:"row", 
        justifyContent:'space-between',
        height:70,alignItems:"center",
        paddingHorizontal:20,
        marginTop:20
    },
    userInfowrapper:{
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        height:50, 
        width:50,
        borderRadius:30
    },
    userTextwrapper:{
        marginLeft:5
    },
    textUpper:{
        color:Colors.blue,
        fontSize:12
    },
    textLower:{
        color:Colors.white,
        fontSize:16
    },
    buttonWrapper:{
        backgroundColor:"#666",
        borderWidth:1,
        padding:8,
        borderRadius:10
    },
    buttonTextWrapper:{
        color:Colors.white,
        fontSize:12
    }


})