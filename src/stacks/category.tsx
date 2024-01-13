import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CATEGORIES, MEALS } from '../lib/utils/data';
import { Categories, Meals } from '../screens';
import Meal from '../screens/Meal';

const Stack = createNativeStackNavigator();

const CategoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FF5F05' },
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Meals"
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
        name="Meal"
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
  );
};

export default CategoryStack;
