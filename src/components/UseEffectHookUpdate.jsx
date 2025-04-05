/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

const UseEffectHookUpdate = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [emoji1, setEmoji1] = useState(0);
  const [emoji2, setEmoji2] = useState(0);
  //   useEffect(() => {
  //     setEmoji1('😁');
  //     setTimeout(() => {
  //       setEmoji1('');
  //     }, 100);
  //   }, [count1]);
  //   useEffect(() => {
  //     setEmoji2('🥹');
  //     setTimeout(() => {
  //       setEmoji2('');
  //     }, 100);
  //   }, [count2]);
  useEmojiFlash(count1,setEmoji1,'😁');
  useEmojiFlash(count2,setEmoji2,'🥹');
  return (
    <View>
      <Text style={{fontSize: 20}}>
        Count1: {count1} {emoji1}
      </Text>
      <Button title="Count1" onPress={() => setCount1(count1 + 1)} />
      <Text style={{fontSize: 20}}>
        Count2: {count2} {emoji2}
      </Text>
      <Button title="Count2" onPress={() => setCount2(count2 + 1)} />
    </View>
  );
};

const useEmojiFlash = (count, setEmoji, emoji) => {
  useEffect(() => {
    setEmoji(emoji);
    const timeout = setTimeout(() => {
      setEmoji('');
    }, 100);
    return () => clearTimeout(timeout); // cleanup timeout if needed
  }, [count]);
};

export default UseEffectHookUpdate;
