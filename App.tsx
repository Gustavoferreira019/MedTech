import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './components/initialScreen';
import Presentation from './components/presentation';
import PacientScreen from './components/pacientScreen'
import ProScreen from './components/proScreen';
import { useEffect, useState } from 'react';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Presentation" component={Presentation} />
        <Stack.Screen name="PacientScreen" component={PacientScreen}/>
        <Stack.Screen name="ProScreen" component={ProScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 61, 122, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
