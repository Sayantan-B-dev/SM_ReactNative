/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { register } from '../services/auth'; // Adjust the path as needed

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if(!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
    }
    try {
      // Call the register function from your auth service
      await register(email, password);
      Alert.alert(
        'Success',
        'A verification email has been sent to your email address. Please verify your email before logging in.',
      );
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#B0B0B0"
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          placeholderTextColor="#B0B0B0"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
            <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'white', marginTop: 20}}>
                Already have an account?</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',  // Dark background color
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#1E1E1E',  // Dark form background
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    color: '#B0B0B0',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#333333',  // Dark input background
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#444444',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#3498db',  // Stylish blue button
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Register;
