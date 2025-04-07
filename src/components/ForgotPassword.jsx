/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {resetPassword} from '../services/auth'; // Adjust the path as needed

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    try {
      // Call the resetPassword function from your auth service
      await resetPassword(email);
      Alert.alert(
        'Success',
        'A password reset link has been sent to your email address.',
      );
      setEmail('');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white', marginTop: 20}}>Log in</Text>
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

export default ForgotPassword;
