/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../redux/slice/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
<View style={{ height: 10 }} />
<Button title="Decrement" onPress={() => dispatch(decrement())} />
<View style={{ height: 10 }} />
<Button title="Increment by 5" onPress={() => dispatch(incrementByAmount(5))} />
<View style={{ height: 10 }} />
<Button title="Reset" onPress={() => dispatch(reset())} />

    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    padding: 20, // Padding from edges
    gap: 10, // Space between buttons (React Native 0.71+)
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
