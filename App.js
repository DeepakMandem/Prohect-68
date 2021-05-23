import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FbScreen2, { FbScreen } from './screens/fb'
import InScreen2 from './screens/in'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    
    <View style={styles.container}>
      <AppContainer />
    
      <StatusBar style="auto" />
      
      
    </View>

    
  );
  const TabNavigator = createBottomTabNavigator({
    Transaction: {screen: TransactionScreen},
    Search: {screen: SearchScreen},
  },
  {
   
  }
  );
}
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
