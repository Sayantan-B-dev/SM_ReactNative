/* eslint-disable react-native/no-inline-styles */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Child from './Child';

const Props = () => {
  const [count, setCount] = useState(0);
  const [Item, setItem] = useState(1);
  return (
    <View>
      <Text style={{fontSize: 50}}>Parent</Text>
      <Button title="Press Count" onPress={() => setCount(count + 1)} />
      <Text> </Text>
      <Button title="Press Item" onPress={() => setItem(Item * 2)} />
      <Child n={count} n2={Item} />
      <Button title="Clear" onPress={() => setItem(1)} />
    </View>
  );
};

export default Props;
