import {View, Text, Button, TextInput, Alert, StyleSheet, Keyboard, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [username, setUsername] = useState(''); // initialize with empty string
  const [storedUsername, setStoredUsername] = useState('');

  // Save username to AsyncStorage
  const saveUsername = async () => {
    if (!username.trim()) {
      Alert.alert('Error', 'Please enter a valid username!');
      return;
    }

    try {
      await AsyncStorage.setItem('username', username.trim());
      setUsername(''); // Clear input after saving
      Keyboard.dismiss(); // Hide keyboard
      Alert.alert('Success', 'Username saved successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to save username!');
    }
  };

  // Retrieve saved username
  const getUsername = async () => {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        setStoredUsername(value);
      } else {
        Alert.alert('Info', 'No username found!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to retrieve username!');
    }
  };

  // Remove stored username
  const removeUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setStoredUsername('');
      Alert.alert('Success', 'Username removed successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to remove username!');
    }
  };

  // Load username on mount
  useEffect(() => {
    getUsername();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>AsyncStorage Demo</Text>

      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save Username" onPress={saveUsername} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Username" onPress={getUsername} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Remove Username" onPress={removeUsername} color="red" />
      </View>

      <Text style={styles.storedText}>Stored Username: {storedUsername || 'None'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 5,
  },
  storedText: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default AsyncStorageExample;
