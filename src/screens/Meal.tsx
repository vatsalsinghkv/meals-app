import { Entypo } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../lib/utils/data';
import { RootStackParamList } from '../lib/utils/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Meal'>;

const Meal = ({ route }: Props) => {
  const { id } = route.params;

  const meal = MEALS.find((meal) => meal.id === id);

  if (!meal)
    return (
      <View>
        <Text>No meal found! for this id: {id}</Text>
      </View>
    );

  const {
    imageUrl,
    title,
    duration,
    complexity,
    isVegetarian,
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
            {/* Title */}
            <Text style={styles.title}>{title}</Text>
            {/* Summary */}
            <View style={styles.summary}>
              <View style={styles.summaryItem}>
                <Entypo name='stopwatch' size={18} color={'#64748b'} />
                <Text style={styles.textSm}>{duration} mins</Text>
              </View>

              <View style={styles.summaryItem}>
                <Entypo name='emoji-happy' size={18} color={'#64748b'} />
                <Text style={styles.textSm}>{complexity}</Text>
              </View>
              <View style={styles.summaryItem}>
                <Entypo name='bar-graph' size={18} color={'#64748b'} />
                <Text style={styles.textSm}>{affordability}</Text>
              </View>
            </View>
          </View>

          {/* Ingredients */}
          <View>
            <Text style={styles.heading}>ingredients</Text>
            <View style={styles.list}>
              {ingredients.map((ingredient) => (
                <Text style={styles.text}>{ingredient}.</Text>
              ))}
            </View>
          </View>

          {/* Steps */}
          <View>
            <Text style={styles.heading}>steps</Text>
            <View style={styles.list}>
              {steps.map((step) => (
                <Text style={styles.text}>{step}.</Text>
              ))}
            </View>
          </View>
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
  list: { gap: 5, marginTop: 12 },
  listItem: {},
  summary: { flexDirection: 'row', gap: 15 },
  summaryItem: { flexDirection: 'row', gap: 5, alignItems: 'center' },
  header: { gap: 10 },

  // Texts
  title: {
    color: '#0f172a',
    fontWeight: '600',
    fontSize: 24,
    textTransform: 'capitalize',
  },
  heading: {
    color: '#0f172a',
    fontWeight: '600',
    fontSize: 20,
    textTransform: 'capitalize',
  },

  textSm: { color: '#64748b', fontSize: 14, textTransform: 'capitalize' },
  text: { color: '#475569', fontSize: 16, textTransform: 'capitalize' },
});
