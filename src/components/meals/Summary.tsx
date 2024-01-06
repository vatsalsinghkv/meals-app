import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Meal from '../../models/meal';

type Props = Pick<Meal, 'affordability' | 'complexity' | 'duration'>;

const Summary = ({ duration, complexity, affordability }: Props) => {
  return (
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
  );
};

export default Summary;

const styles = StyleSheet.create({
  summary: { flexDirection: 'row', gap: 15 },
  summaryItem: { flexDirection: 'row', gap: 5, alignItems: 'center' },
  textSm: { color: '#64748b', fontSize: 14, textTransform: 'capitalize' },
});
