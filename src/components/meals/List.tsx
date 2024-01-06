import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  list: string[];
};

const List = ({ list, title }: Props) => {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.list}>
        {list.map((line, i) => (
          <Text
            key={line.slice(0, 5).replaceAll(' ', '-') + i}
            style={styles.text}
          >
            {line}.
          </Text>
        ))}
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: { gap: 6.5, marginTop: 12 },
  heading: {
    color: '#0f172a',
    fontWeight: '600',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  text: { color: '#475569', fontSize: 16, textTransform: 'capitalize' },
});
