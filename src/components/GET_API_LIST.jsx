import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios
      .get('http://10.0.2.2:3000/users')
      .then(response => setMyData(response.data))
      .catch(err => console.error(err));
  }, []);
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.label}>
        Name: <Text style={styles.value}>{item.name}</Text>
      </Text>
      <Text style={styles.label}>
        Email: <Text style={styles.value}>{item.email}</Text>
      </Text>
      <Text style={styles.label}>
        Phone: <Text style={styles.value}>{item.phone}</Text>
      </Text>
      <Text style={styles.label}>
        Address: <Text style={styles.value}>{item.address}</Text>
      </Text>
      <Text style={styles.label}>
        Username: <Text style={styles.value}>{item.username}</Text>
      </Text>
      <Text style={styles.label}>
        DOB: <Text style={styles.value}>{item.dob}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GET_API_LIST</Text>
      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#0F172A', // Deep navy blue background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#38BDF8', // Sky blue
    letterSpacing: 1,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B', // Slightly lighter dark card
    padding: 18,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#334155', // Subtle border
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#94A3B8', // Slate gray for labels
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F1F5F9', // Light text
    marginBottom: 8,
  },
});

export default GET_API_LIST;
