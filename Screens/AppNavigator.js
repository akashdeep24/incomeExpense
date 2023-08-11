import React from 'react';
import Dashboard from './Dashboard';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';
import Transactions from './Transactions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="AddIncome" component={AddIncome} />
      <Stack.Screen name="AddExpense" component={AddExpense} />
      <Stack.Screen name="Transactions" component={Transactions} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
