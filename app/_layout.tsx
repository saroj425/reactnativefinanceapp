import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import {useFonts,Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {  
  const[loaded,error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  // useEffect(()=>{
  //   if(loaded){
  //     SplashScreen.hideAsync()
  //   }
  // },[loaded])

  console.log("Loaded",loaded);
  
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      {/* <Stack.Screen name="index" /> */}
    </Stack>
  );
}
