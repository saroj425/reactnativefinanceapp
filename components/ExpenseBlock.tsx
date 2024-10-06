import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ExpenseType } from "@/types";
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
    const renderItem: ListRenderItem<Partial<ExpenseType>> = ({item,index}) => {
        if(index == 0){
            return(
                <TouchableOpacity onPress={()=>{}}>
                        <View style={styles.addBlockItem}>
                            <FontAwesome name='plus' size={22} color={Colors.yellow}/>

                        </View>
                </TouchableOpacity>
            )
        }
        let amount = item?.amount?.toString().split(".");
        return (
          <View style={[styles.expenselist,{backgroundColor:item.name == "Food"? Colors.yellow :item.name =="Saving" ? Colors.blue : Colors.tintColor }]}>
            {/* Use optional chaining in case name is undefined */}
            <Text style={styles.blockText1}>{item?.name ?? 'No Name'}</Text>
            <Text style={styles.blockText2}>${amount[0] ?? 'No amount'}.<Text style={styles.blockText2span}>{amount[1]}</Text></Text>
            <View style={styles.blockText3View}>
                <Text style={styles.blockText3}>{item?.percentage ?? 'No percentage'} %</Text>
            </View>
          </View>
        );
      };
      const statics = [{name:"Add Item"}]
  return (
    <View>
      <FlatList data={statics.concat(expenseList)} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
    </View>
  )
}

export default ExpenseBlock


const styles = StyleSheet.create({
    expenselist:{
        backgroundColor:Colors.expensecard,
        width:100,
        padding:10,
        borderRadius:15,
        marginRight:20,
        gap:5,
        justifyContent:"space-between",
        alignItems:"flex-start"
    },
    addBlockItem:{
        flex:1,
        borderWidth:2,
        borderColor:"#666",
        borderStyle:'dashed',
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
        //width:100,
        padding:20,
        borderRadius:10
    },
    blockText1:{
        color:Colors.white,
        fontSize:14,
    },
    blockText2span:{
        color:Colors.white,
        fontSize:12,
        fontWeight:"400"
    },
    blockText2:{
        color:Colors.white,
        fontSize:16,
        fontWeight:"600"
    },
    blockText3:{
        color:Colors.black,
        fontSize:14,
    },
    blockText3View:{
        backgroundColor:'rgba(255,255,255,0.2)',
        paddingHorizontal:5,
        paddingVertical:3,
        borderRadius:3,
    }
})