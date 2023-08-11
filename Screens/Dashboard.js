import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector, useDispatch } from 'react-redux'


export default function Dashboard({navigation}){
    const transactions = useSelector(state=>state.transactions)
    const getBalance = (transactions)=>{
        let totalBalance = 0
        totalBalance = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'income'){
                return accumulator + transaction.amount;
            }
            else if(transaction.type === 'expense'){
                return accumulator - transaction.amount;
            }
          }, 0)
        return totalBalance
    }
    const getExpense = (transactions)=>{
        let expense = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'expense'){
                return accumulator + transaction.amount;
            }
            else{
                return accumulator
            }
          }, 0)
        return expense
    }
    const getIncome = (transactions)=>{
        let income = transactions.reduce((accumulator, transaction) => {
            if(transaction.type === 'income'){
                return accumulator + transaction.amount;
            }
            else{
                return accumulator
            }
          }, 0)
        return income
    }
  return (
    <SafeAreaView>
        <View style={styles.main}>
            <View style={styles.horizontalButtonSet}>
                <TouchableOpacity onPress={()=>navigation.navigate('AddIncome')} style={[styles.button, {backgroundColor:'green'}]}>
                    <AntDesign name="pluscircleo" size={25} color="#FFF" />
                    <Text style={styles.buttonText}>Add Income</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AddExpense')} style={[styles.button, {backgroundColor:'red'}]}>
                    <AntDesign name="minuscircleo" size={25} color="#FFF" />
                    <Text style={styles.buttonText}>Add Expense</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.horizontalButtonSet}>
                <TouchableOpacity onPress={()=>navigation.navigate('Transactions')} style={[styles.button, {backgroundColor:'blue'}]}>
                    <AntDesign name="menuunfold" size={25} color="#FFF" />
                    <Text style={styles.buttonText}>Transactions</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.monthTransaction} >
            <Text style={[styles.buttonText, {color:'black'}]}>Current Month</Text>
            <View style={styles.monthDetails}>
                <View style={{flexDirection:'row', width:'99%', height:60}}>
                    <View style={{width:'33%',borderWidth:1, alignItems:'center'}}>
                        <Text style={[styles.buttonText, {color:'green'}]}>Income</Text>
                        <Text style={[styles.buttonText, {color:'black'}]}>{getIncome(transactions)}</Text>
                    </View>
                    <View style={{width:'33%',borderWidth:1, alignItems:'center'}}>
                        <Text style={[styles.buttonText, {color:'green'}]}>Expense</Text>
                        <Text style={[styles.buttonText, {color:'black'}]}>{getExpense(transactions)}</Text>
                    </View>
                    <View style={{width:'33%',borderWidth:1, alignItems:'center'}}>
                        <Text style={[styles.buttonText, {color:'green'}]}>Balance</Text>
                        <Text style={[styles.buttonText, {color:'black'}]}>{getBalance(transactions)}</Text>
                    </View>
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    main:{
        justifyContent:'center',
        alignItems:'center'
    },
    horizontalButtonSet:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        height:75,
        width:'45%',
        margin:5
    },
    buttonText:{
        color:'#FFF',
        fontSize:18
    },
    monthTransaction:{
        width:'95%',
        elevation:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    monthDetails:{
        width:'98%',
        marginVertical:5,
        marginLeft:15
    }
})