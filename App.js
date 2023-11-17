import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SignInScreen from './src/screens/SignInScreen';
import ExplorerScreen from './src/screens/ExplorerScreen';

//const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={StyleSheet.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;