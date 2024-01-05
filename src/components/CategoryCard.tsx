import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ColorValue,
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props extends Omit<PressableProps, 'children'> {
  color: ColorValue;
  title: string;
  i: number;
}

const CategoryCard = ({ title, color, i, ...rest }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        i % 2 === 0 ? { marginRight: 10 } : { marginLeft: 10 },
        pressed && styles.pressed,
      ]}
      {...rest}
    >
      {/* BG */}
      <ImageBackground
        source={{
          uri: `https://source.unsplash.com/random/300x500?${title}-food,food`,
        }}
        style={styles.bgImg}
        resizeMode='cover'
      >
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.gradient}
        ></LinearGradient>
      </ImageBackground>

      <View style={[styles.textContainer]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    height: 150,
    overflow: 'hidden',
  },
  pressed: { opacity: 0.5 },
  bgImg: { flex: 1, height: 150 },
  gradient: {
    flex: 1,
    opacity: 0.55,
  },
  text: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  textContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',

    // elevation: 5,
    // shadowColor: '#000',
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
  },
});
