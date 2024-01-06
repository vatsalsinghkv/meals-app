import { Entypo } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { List, Summary } from '../components/meals';
import { Button } from '../components/ui';
import { MEALS } from '../lib/utils/data';
import { RootStackParamList } from '../lib/utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Meal'>;

const Meal = ({ route, navigation }: Props) => {
  const { id } = route.params;

  const meal = MEALS.find((meal) => meal.id === id);

  if (!meal)
    return (
      <View>
        <Text>No meal found! for this id: {id}</Text>
      </View>
    );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight() {
        return (
          <Button>
            <Entypo name='heart-outlined' size={24} />
          </Button>
        );
      },
    });
  });

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    steps,
    ingredients,
  } = meal;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={{ uri: imageUrl }} resizeMode='cover' style={styles.img} />

      {/* Content */}
      <ScrollView style={styles.scroll}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Summary {...{ duration, complexity, affordability }} />
          </View>

          {/* Ingredients */}
          <List title='ingredients' list={ingredients} />
          {/* Steps */}
          <List title='steps' list={steps} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: { flex: 1 },
  img: {
    height: 300,
    marginBottom: -20,
  },
  scroll: {
    flex: 1,
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 26,
    paddingVertical: 42,
  },
  content: {
    // paddingVertical: 5,
    gap: 20,
    flex: 1,
    paddingBottom: 80,
  },
  header: { gap: 10 },
  // Texts
  title: {
    color: '#0f172a',
    fontWeight: '600',
    fontSize: 24,
    textTransform: 'capitalize',
  },
});
