/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { MealCard } from '../components/meals';
import useFavorites from '../lib/hooks/use-favorites';
import { type FavoriteStackList } from '../lib/utils/types';

type Props = NativeStackScreenProps<FavoriteStackList, 'FavoriteMeals'>;

const FavoriteMealsScreen = ({ navigation }: Props) => {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return (
      <View>
        <Text>No favorite meal found!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={favorites}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      renderItem={({ item }) => (
        <MealCard
          onPress={() => {
            navigation.navigate('Meal', { id: item.id });
          }}
          {...item}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FavoriteMealsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
