/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const GET_API = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users').then(result => {
      setMyData(result.data);
    });
  });
  //   useEffect(() => {
  //     fetch('http://10.0.2.2:3000/users')
  //       .then(res => res.json())
  //       .then(result => {
  //         console.warn(result);
  //       })
  //       .catch(err => {
  //         console.error('Error fetching users:', err);
  //       });
  // }, []);
  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 20}}>GET API METHOD</Text>
      {myData.map(item => <Text style={{fontSize: 20}} key={item.id}>{item.name}</Text>)}
    </View>
  );
};

export default GET_API;
