/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Switch, StyleSheet, SafeAreaView} from 'react-native';

const ToggleSwitchDarkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#121212' : '#F2F2F2'},
      ]}>
      <View style={styles.switchContainer}>
        <Text style={[styles.label, {color: isDarkMode ? '#FFF' : '#333'}]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: '600',
  },
});

export default ToggleSwitchDarkmode;
