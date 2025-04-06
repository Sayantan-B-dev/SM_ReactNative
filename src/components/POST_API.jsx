/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const POST_API = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    dob: '',
  });
  const handelInput = (field, value) => {
    setFormData({...formData, [field]: value});
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/users',formData);
      Alert.alert('Success', 'OK');
      console.warn(response.data);
      setFormData({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        username: '',
        dob: '',
      });
    } catch (err) {
      console.error(err);
      Alert.alert('error!', 'something went wrong');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 20}}>
        POST_API
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={value => handelInput('id', value)}
      />
      <TextInput
        placeholder="Enter name"
        value={formData.name}
        onChangeText={value => handelInput('name', value)}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={value => handelInput('email', value)}
      />
      <TextInput
        placeholder="Enter Phone no"
        value={formData.phone}
        onChangeText={value => handelInput('phone', value)}
      />
      <TextInput
        placeholder="Enter Address"
        value={formData.address}
        onChangeText={value => handelInput('address', value)}
      />
      <TextInput
        placeholder="Enter username"
        value={formData.username}
        onChangeText={value => handelInput('username', value)}
      />
      <TextInput
        placeholder="Enter DOB"
        value={formData.dob}
        onChangeText={value => handelInput('dob', value)}
      />
      <Button title="save" onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;
