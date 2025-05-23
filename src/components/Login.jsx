/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {loginUser} from '../services/auth'; // Adjust the path as needed

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      // Call the login function from your auth service
      const { emailverified} = await loginUser(email, password);
      if (!emailverified) {
        Alert.alert(
          'Email Verification Required',
          'Please verify your email before logging in.',
        );
        return;
      }
      Alert.alert('Success', 'Logged in successfully!');
      setEmail('');
      setPassword('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{color: 'white', marginTop: 20}}>
          Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Register')}>
        <Text style={{color: 'white', marginTop: 20}}>
          Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Dark background
    padding: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#333', // Darker input fields
    color: 'white',
    paddingLeft: 10,
  },
  button: {
    width: 200,
    backgroundColor: 'purple',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default Login;
