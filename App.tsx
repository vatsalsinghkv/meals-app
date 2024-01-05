import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Categories, Meals } from './src/screens';
import Meal from './src/screens/Meal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            contentStyle: { backgroundColor: 'white' },
          }}
        >
          <Stack.Screen name='Categories' component={Categories} />
          <Stack.Screen name='Meals' component={Meals} />
          <Stack.Screen name='Meal' component={Meal} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  );
}
