import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { MealCard } from '../components';
import { MEALS } from '../lib/utils/data';
import { RootStackParamList } from '../lib/utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Meals'>;

const Meals = ({ route, navigation }: Props) => {
  const { categoryId } = route.params;

  const meals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  if (!meals) {
    return (
      <View>
        <Text>No meal found! for id: {categoryId}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={meals}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      renderItem={({ item }) => (
        <MealCard
          onPress={() => navigation.navigate('Meal', { id: item.id })}
          {...item}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
