import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useStore} from '../zustaand/store';

const OneZustand = () => {
  const {count, increment, decrement} = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌟 Divine Counter</Text>
      <Text style={styles.counter}>{count}</Text>

      <TouchableOpacity style={styles.btn} onPress={increment}>
        <Text style={styles.btnText}>➕ Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn, styles.decrement]} onPress={decrement}>
        <Text style={styles.btnText}>➖ Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OneZustand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // Deep black, like a luxury car interior
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F1C40F', // Gold, baby
    marginBottom: 40,
    fontStyle: 'italic',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  counter: {
    fontSize: 60,
    color: '#FFFFFF',
    marginBottom: 40,
    fontWeight: '600',
  },
  btn: {
    backgroundColor: '#1F1F1F',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: '#F1C40F',
    shadowColor: '#F1C40F',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1C40F',
    textAlign: 'center',
  },
  decrement: {
    backgroundColor: '#111111',
    borderColor: '#E74C3C', // Red accent for decrement
    shadowColor: '#E74C3C',
  },
});
