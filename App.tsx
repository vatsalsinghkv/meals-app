import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { CATEGORIES, MEALS } from './src/lib/utils/data';
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
          <Stack.Screen
            name='Meals'
            component={Meals}
            options={({ route }) => {
              const { categoryId } = route.params as { categoryId: string };
              const category = CATEGORIES.find((c) => c.id === categoryId);
              return {
                title: category?.title ?? 'meals',
              };
            }}
          />
          <Stack.Screen
            name='Meal'
            component={Meal}
            options={({ route }) => {
              const { id } = route.params as { id: string };
              const meal = MEALS.find((m) => m.id === id);
              return {
                title: meal?.title ?? 'meal',
                headerBackTitle: 'Back',
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='dark' />
    </>
  );
}
