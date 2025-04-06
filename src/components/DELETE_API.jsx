/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const DELETE_API = () => {
  const [id, setId] = useState();
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
      console.warn(response.data);
      Alert.alert('Success', 'Data deleted successfully');
    } catch (error) {
      console.error(error);
      Alert.alert('error!', 'something went wrong');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 20}}>
        DELETE_API
      </Text>
      <TextInput
        placeholder="Enter ID"
        value={id}
        onChangeText={value => setId(value)}
      />
      <Button title="save" onPress={handleDelete} />
    </View>
  );
};

export default DELETE_API;
