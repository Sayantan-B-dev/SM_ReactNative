/* eslint-disable react-native/no-inline-styles */
import {View, Text, StatusBar, Platform} from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'purple',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={false}
      />
      <Text style={{color: 'white', fontSize: 20}}>StatusBarExample</Text>
    </View>
  );
};

export default StatusBarExample;

