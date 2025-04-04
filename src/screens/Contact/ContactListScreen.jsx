import { Text, FlatList} from 'react-native';
import React from 'react';
import {users} from './userContact';
import ContactItem from '../../components/ContactItem';
import { style } from './Style';

const ContactListScreen = () => {
  const renderItem = ({item}) => (
    <ContactItem name={item.name} email={item.email} />
  );
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      ListHeaderComponent={<Text style={style.heading}>Contacts</Text>}
      contentContainerStyle={style.list}
    />
  );
};

export default ContactListScreen;
