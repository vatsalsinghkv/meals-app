import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { MEALS } from '../lib/utils/data';
import FavoriteMealsScreen from '../screens/FavoriteMeals';
import Meal from '../screens/Meal';

const Stack = createNativeStackNavigator();

const FavoriteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#FF5F05' },
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="FavoriteMeals" component={FavoriteMealsScreen} />
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

export default FavoriteStack;
