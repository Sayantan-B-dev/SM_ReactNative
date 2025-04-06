/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1-555-1234',
      address: '123 Maple Street, Springfield',
      username: 'alicej',
      dob: '1990-03-15',
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '+1-555-5678',
      address: '456 Oak Avenue, Riverdale',
      username: 'bobsmith',
      dob: '1985-07-21',
    },
    {
      id: '3',
      name: 'Carla Davis',
      email: 'carla.davis@example.com',
      phone: '+1-555-8765',
      address: '789 Pine Road, Hilltown',
      username: 'carlad',
      dob: '1992-11-02',
    },
    {
      id: '4',
      name: 'David Lee',
      email: 'david.lee@example.com',
      phone: '+1-555-2345',
      address: '321 Birch Blvd, Lakeside',
      username: 'dlee',
      dob: '1988-04-10',
    },
    {
      id: '5',
      name: 'Eva Martinez',
      email: 'eva.martinez@example.com',
      phone: '+1-555-4321',
      address: '654 Cedar Lane, Brookfield',
      username: 'evam',
      dob: '1993-08-29',
    },
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>📧 {item.email}</Text>
      <Text style={styles.info}>📞 {item.phone}</Text>
      <Text style={styles.info}>🏠 {item.address}</Text>
      <Text style={styles.info}>👤 {item.username}</Text>
      <Text style={styles.info}>🎂 {item.dob}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔍 Contact Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Type a name..."
        placeholderTextColor="#aaa"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No contacts found.</Text>
        }
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: '#111827',
    elevation: 2,
  },
  card: {
    backgroundColor: 'crimson',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#111827',
  },
  info: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 18,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 50,
  },
});
