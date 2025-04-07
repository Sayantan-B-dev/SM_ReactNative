import React, { useState, createContext } from 'react';
import { View, StyleSheet } from 'react-native';
import FirstChild from './FirstChild';

// Creating context
export const CountContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <CountContext.Provider value={{ count, incrementCount }}>
      <View style={styles.container}>
        <FirstChild />
      </View>
    </CountContext.Provider>
  );
};

export default Parent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
