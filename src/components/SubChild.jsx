import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CountContext } from './Parent';

const SubChild = () => {
  const { count, incrementCount } = useContext(CountContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SubChild: {count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
    </View>
  );
};

export default SubChild;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black', // change if you have dark background
  },
});
