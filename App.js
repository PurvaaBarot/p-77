import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpaceCraft from './SpaceCraft';
import DailyPic from './DailyPic';
import StarMap from './StarMap';
import HomeScreen from './Home';

const Stack = createStackNavigator()
export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown : false}}>
        <Stack.Screen namme="Home" component={{HomeScreen}}/>
        <Stack.Screen namme="SpaceCraft" component={{SpaceCraftScreen}}/>
        <Stack.Screen namme="DailyPic" component={{DailyPicScreen}}/>
        <Stack.Screen namme="StarMap" component={{StarMapScreen}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
