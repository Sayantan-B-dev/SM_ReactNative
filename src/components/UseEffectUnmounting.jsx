/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import ShowChild from './ShowChild';

const UseEffectUnmounting = () => {
  const [showChild, setShowChild] = useState(true);
  const [emoji, setEmoji] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>Parent Component<Text style={{fontSize: 15}}> {emoji}</Text></Text>
      {showChild ? <ShowChild setEmoji={setEmoji}/> : null}
      <Button title="toggle" onPress={()=>setShowChild(!showChild)} />
    </View>
  );
};

export default UseEffectUnmounting;
