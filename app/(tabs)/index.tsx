import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import Header from '@/components/Header'
import ExpenseBlock from '@/components/ExpenseBlock'
import IncomeBlock from '@/components/IncomeBlock'
import SpendingBlock from '@/components/SpendingBlock'
import ExpenseList from '@/data/expenses.json';
import incomeList from '@/data/income.json';
import spendingList from '@/data/spending.json';
import { PieChart } from "react-native-gifted-charts";


const Home = () => {
  // const [fontsLoads] = useFonts(
  //   {
  //     Poppins_400Regular,Poppins_600SemiBold
  //   }
  // )
  const pieData = [
    {
      value: 25,
      color: Colors.yellow,
      focused: true,
      text: "25%",
    },
    {
      value: 50,
      color: Colors.blue,
      text: "50%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  return (
    <>
      <Stack.Screen options={{header:()=><Header/>}}/>
      <View style={styles.container}>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>index</Text>
        </ScrollView> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                My <Text style={{ fontWeight: 700 }}>Expenses</Text>
              </Text>
              <Text style={{ color: Colors.white, fontSize: 25, fontWeight: 700 }} > $ 1475.<Text style={{ fontSize: 22, fontWeight: 400 }}>00</Text> </Text>
            </View>
            <View style={{paddingVertical:20,alignItems:'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                // focusOnPress
                semiCircle
                radius={50}
                innerRadius={30}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                      <Text style={{ fontSize: 16, color: "white", fontWeight: "bold", }} > 47% </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expenseList={ExpenseList} />
          <IncomeBlock incomeList={incomeList} />
          <SpendingBlock spendingList={spendingList} />
        </ScrollView>
      </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center', 
    paddingTop:90, 
    backgroundColor:Colors.black,
    paddingHorizontal:20,
    color:Colors.white,
  },
  text:{
      fontSize:20,
      color:Colors.white,
  }
})