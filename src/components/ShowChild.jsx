/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const ShowChild = ({setEmoji}) => {
  useEffect(() => {
    return () => {
      setEmoji(': NO! My child🥲');
      setTimeout(() => {
        setEmoji('');
      }, 500);
    };
  }, []);
  return (
    <View>
      <Text style={{fontSize: 20}}>Child Component</Text>
    </View>
  );
};
export default ShowChild;
