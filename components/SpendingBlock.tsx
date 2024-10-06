import { View, Text, ListRenderItem, FlatList } from 'react-native'
import React from 'react'
import { IncomeType, SpendingType } from '@/types'
import Colors from '@/constants/Colors'
import { AirbnbIcon, AmazonIcon, DollarIcon, FigmaIcon, NetflixIcon, ShoopingCartIcon, SpotifyIcon } from '@/constants/Icons'

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  let icon = <DollarIcon width={18} height={18} color={Colors.white}/>
  // const renderItem :ListRenderItem<IncomeType> = ({item})=>{
  //     return(
  //       <View>
  //         <Text style={{color:Colors.white}}>{item.name}</Text>
  //       </View>
  //     )
  // }
  return (
    <View style={{marginVertical:20,alignItems:"flex-start",marginBottom:70}}>
      <Text style={{color:Colors.white, fontSize:16,marginBottom:10}}>My <Text style={{fontWeight:700}}>Spending</Text></Text>
      {
        spendingList && spendingList.map((item)=>{
          if (item.name == "AirBnB Rent") {
            icon = <AirbnbIcon width={18} height={18} color={Colors.white} />;
          } else if (item.name == "Netflix") {
            icon = <NetflixIcon width={18} height={18} color={Colors.white} />;
          } else if (item.name == "Spotify") {
            icon = <SpotifyIcon width={18} height={18} color={Colors.white} />;
          } else if (item.name == "Amazon") {
            icon = <AmazonIcon width={18} height={18} color={Colors.white} />;
          } else if (item.name == "Figma") {
            icon = <FigmaIcon width={18} height={18} color={Colors.white} />;
          } else if (item.name == "Online Shopping") {
            icon = (
              <ShoopingCartIcon width={18} height={18} color={Colors.white} />
            );
          } 
          return(
            <View style={{flexDirection:'row',alignItems:"center",marginVertical:10}} key={item.id}>
              <View style={{backgroundColor:Colors.grey,padding:10,borderRadius:10}}>
                {icon}
              </View>
              <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{gap:3,marginLeft:10}}>
                  <Text style={{color:Colors.white,fontSize:16,fontWeight:600}}>{item.name}</Text>
                  <Text style={{color:Colors.white}}>{item.date}</Text>
                </View>
                <Text style={{color:Colors.white,fontSize:16,fontWeight:600}}><Text style={{color:"yellow"}}>Rs.</Text> {item.amount}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default SpendingBlock