import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { CategoryCard } from '../components';
import { CATEGORIES } from '../lib/utils/data';
import { RootStackParamList } from '../lib/utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Categories'>;

const Categories = ({ navigation }: Props) => {
  return (
    <FlatList
      data={CATEGORIES}
      style={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      renderItem={({ item, index }) => (
        <CategoryCard
          title={item.title}
          color={item.color}
          i={index}
          onPress={() => {
            navigation.navigate('Meals', { categoryId: item.id });
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
