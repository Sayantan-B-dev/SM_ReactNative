/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('this is useEffect');
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffectHook</Text>
      <Text>Count: {count}</Text>
      <Button title="Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseEffectHook;
