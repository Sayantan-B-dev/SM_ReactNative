import { View, StyleSheet } from 'react-native';
import React from 'react';
import OneZustand from './OneZustand';

const TowZustand = () => {
  return (
    <View style={styles.container}>
      <OneZustand />
    </View>
  );
};

export default TowZustand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f', // rich dark background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
