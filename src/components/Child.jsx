/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const Child = ({n, n2}) => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Child</Text>
      <Text style={{fontSize: 30}}>Number of Counts: {n}</Text>
      <Text style={{fontSize: 30}}>Number of Items: {n2}</Text>
    </View>
  );
};

export default Child;
