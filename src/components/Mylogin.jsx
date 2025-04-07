import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const MyLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold mb-8 text-black">Login</Text>

      <View className="w-full mb-4">
        <Text className="text-lg text-gray-700 mb-2">Email</Text>
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 text-base text-black"
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="w-full mb-6">
        <Text className="text-lg text-gray-700 mb-2">Password</Text>
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 text-base text-black"
          placeholder="Enter your password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 py-3 px-6 rounded-xl w-full">
        <Text className="text-center text-white text-lg font-semibold">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyLogin;
