import React from 'react';
import {View, Text, Button, Alert, StyleSheet} from 'react-native';

const AlertMessage = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'This is an alert message',
      [
        {
          text: 'Cancel',
          onPress: () => console.warn('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.warn('OK Pressed'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alert</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default AlertMessage;
