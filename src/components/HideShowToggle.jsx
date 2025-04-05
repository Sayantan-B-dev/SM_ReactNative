/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import My from './My';

const HideShowToggle = () => {
  const [status, setStatus] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 30}}>HideShowToggle</Text>
      <View style={style.allbtn}>
        <TouchableOpacity style={style.button} onPress={() => setStatus(true)}>
          <Text style={style.buttonText}>Show</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={() => setStatus(false)}>
          <Text style={style.buttonText}>Hide</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => setStatus(!status)}>
          <Text style={style.buttonText}>Toggle</Text>
        </TouchableOpacity>
      </View>

      {status ? <My /> : null}
    </View>
  );
};

const style = StyleSheet.create({
  allbtn:{
    paddingVertical:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  button: {
    backgroundColor: 'blue',


    width: 100,
    borderRadius: 15,
    padding: 8,
    marginBottom: 5,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize:20,
    fontWeight:500,
  },
});
export default HideShowToggle;
