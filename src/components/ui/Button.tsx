import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { inherits } from 'util';

interface Props extends PressableProps {
  children: React.ReactNode;
  style?: ViewStyle | TextStyle;
  variant?: 'icon';
}

export default function Button({
  children,
  style,
  variant = 'icon',
  ...props
}: Props) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressable}>
      <View style={[styles[variant]]}>
        <Text style={[styles.text]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Variants
  icon: {
    borderRadius: 100,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  pressable: {
    opacity: 0.75,
  },
});
