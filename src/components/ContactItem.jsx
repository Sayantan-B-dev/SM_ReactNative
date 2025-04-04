import {View, Text} from 'react-native';
import React from 'react';
import { style } from '../screens/Contact/Style';

const ContactItem = ({name,email}) => {
  return (
    <View style={style.item}>
      <Text style={style.name}>{name}</Text>
      <Text style={style.email}>{email}</Text>
    </View>
  );
};

export default ContactItem;
