/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput,Button} from 'react-native';
import React from 'react';
import {useState} from 'react';

const InputText = () => {
  const [username, setUsername] = useState('');
  const clear = () => setUsername('');
  return (
    <View>
      <Text style={{fontSize: 30}}>InputText</Text>
      <Text style={{ fontSize: 30 }}>{username}</Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderRadius: 10,
          borderColor: 'black',//have to write all the style separatly..cant be written as css
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 16,
        }}
        onChangeText={(text) => setUsername(text)}//not onChange,in react native its onChangeText
        value={username}
        placeholder="Enter name"
      />
      <Button title="Clear" onPress={clear}/>
    </View>
  );
};

export default InputText;
