import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Meal from '../models/meal';

type Props = PressableProps &
  Pick<Meal, 'imageUrl' | 'title' | 'duration' | 'complexity'>;

const MealCard = ({
  imageUrl,
  title,
  duration,
  complexity,
  ...props
}: Props) => {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} {...props}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.container}
        resizeMode='cover'
      >
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.gradient}
        ></LinearGradient>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.text}>
            <Entypo name='stopwatch' size={18} /> {duration} mins
          </Text>
          <Text style={styles.text}>
            <Entypo name='emoji-happy' size={18} /> {complexity}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    borderRadius: 22,
    overflow: 'hidden',
  },
  pressed: { opacity: 0.75 },
  gradient: {
    flex: 1,
    opacity: 0.55,
  },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 26,
    zIndex: 10,
    flex: 1,
    rowGap: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  text: {
    fontWeight: '500',
    color: '#FFFFFF',
    textTransform: 'capitalize',
    // fontWeight: 'bold',
  },
});
