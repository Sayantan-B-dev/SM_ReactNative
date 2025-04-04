/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import exStyle from '../Style/Style';

const Styling = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          backgroundColor: 'green',
          borderWidth: 1,
          borderColor: 'black',
        }}>
        Inline Style
      </Text>
      <Text style={inStyle.first}>Internal Style</Text>
      <Text style={inStyle.first}>Internal Style</Text>
      <Text style={exStyle.yay}>External Style</Text>
      <Text style={exStyle.yay}>External Style</Text>
    </View>
  );
};

const inStyle = StyleSheet.create({
  first: {
    fontSize: 30,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:20,
  },
});
export default Styling;
