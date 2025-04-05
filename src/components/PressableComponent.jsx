import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const PressableComponent = () => {
  const handlePress = () => {
    console.warn('ok');
  };
  const handlePressIn = () => {
    console.warn('In');
  };
  const handlePressOut = () => {
    console.warn('Out');
  };
  const handleLongPress = () => [console.warn('long')];
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress} // by default value 500 ms
        delayLongPress={5000}
      >
        <Text style={styles.text}>Press Me</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PressableComponent;
