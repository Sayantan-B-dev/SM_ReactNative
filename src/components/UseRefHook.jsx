import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';

const UseRefHook = () => {
  const myRef = useRef();
  const handleRef = () => {
    myRef.current.setNativeProps({
      text: 'Sayantan',
      style: {color: 'white', backgroundColor: 'crimson'},
    });
    myRef.current.focus();
  };
  return (
    <View style={style.content}>
      <TextInput
        ref={myRef}
        style={style.input}
        placeholder="Enter your text"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={style.button} onPress={handleRef}>
        <Text style={style.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UseRefHook;
