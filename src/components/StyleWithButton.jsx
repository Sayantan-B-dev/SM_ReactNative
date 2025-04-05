import {View, Text, Button,TouchableOpacity,StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';

const StyleWithButton = () => {
  return (
    <View>
      <Button title="Basic button" color={'red'}/>
      <Text>    </Text>
      <TouchableOpacity style={style.button} activeOpacity={0.2}>
        <Text style={style.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>
      <Text>    </Text>
      <TouchableHighlight style={style.button} onPress={()=>console.log('ok')} underlayColor={'#333'}>
        <Text style={style.buttonText}>TouchableHighlight</Text>
      </TouchableHighlight>
    </View>
  );
};

export default StyleWithButton;

const style = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    margin: 5,
    elevation:5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
