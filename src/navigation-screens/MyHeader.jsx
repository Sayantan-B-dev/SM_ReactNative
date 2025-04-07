import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

const MyHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is MyHeader Screen</Text>
    </SafeAreaView>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
