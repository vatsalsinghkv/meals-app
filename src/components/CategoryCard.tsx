import React from 'react';
import {
  ColorValue,
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
    <View
      style={[
        styles.gridItem,
        i % 2 === 0 ? { paddingRight: 10 } : { paddingLeft: 10 },
      ]}
    >
      <Pressable style={({ pressed }) => pressed && styles.pressed} {...rest}>
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
  },
  text: { fontSize: 20, fontWeight: '500' },
  pressed: { opacity: 0.5 },
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 26,
    borderRadius: 16,
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOpacity: 0.25,
    // shadowRadius: 5,
    // shadowOffset: { width: 0, height: 2 },
  },
});
