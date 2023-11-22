import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SignInScreen from './src/screens/SignInScreen';
import ExplorerScreen from './src/screens/ExplorerScreen';
import MyRegisteredCourses from './src/screens/MyRegisteredCourses';
import AddCourse from './src/screens/AddCourse';

const Stack = createStackNavigator();

const App = () => {
  return (

    /*  <SafeAreaView style={StyleSheet.root}>
        <SignInScreen />
        <ExplorerScreen/>
        <RegisteredCourses name="My registered courses"/>
  
      </SafeAreaView>
    );*/
    <NavigationContainer>
      <Stack.Navigator

      >

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="MyRegisteredCourses"
          component={MyRegisteredCourses}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="AddCourse"
          component={AddCourse}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Explorer"
          component={ExplorerScreen}

        />

       

      </Stack.Navigator>

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;