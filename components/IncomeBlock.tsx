import { View, Text, FlatList, ListRenderItem, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IncomeType } from '@/types'
import Colors from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from '@/constants/Icons'

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem :ListRenderItem<IncomeType> = ({item})=>{
    let icon = <DollarIcon width={18} height={18} color={Colors.white} />;
    if ( item.name == 'Freelancing' ) {
      icon = <WalletCardIcon width={18} height={18} color={Colors.white} />
    } else if (item.name == 'Interest') {
      icon = <WalletAddMoneyIcon width={18} height={18} color={Colors.white} />
    }
    let amount = item.amount.split(".");
    return(
      <View style={styles.renderContainer} >
      <View style={styles.containerinner} >
        <View style={styles.containerinner2}>
          {icon}
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="more-horizontal" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <Text style={{ color: Colors.white }}>{item.name}</Text>
      <Text style={{ color: Colors.white, fontSize: 18, fontWeight: "600" }}>
        ${amount[0]}.
        <Text style={{ fontSize: 12, fontWeight: "400" }}>{amount[1]}</Text>
      </Text>
    </View>
    );
  }
  return (   
    <View style={{marginTop:20}}>
      <Text style={{ color: Colors.white, fontSize: 16, marginBottom: 20 }}>
        My <Text style={{ fontWeight: "700" }}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default IncomeBlock

const styles = StyleSheet.create({
    renderContainer:{
        backgroundColor: "#032b69",
        padding: 20,
        borderRadius: 20,
        marginRight: 15,
        width: 150,
        gap: 10,
    },
    containerinner:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    containerinner2:{
      borderColor: "#666",
      borderWidth: 1,
      borderRadius: 50,
      padding: 5,
      alignSelf: "flex-start",
    }
})