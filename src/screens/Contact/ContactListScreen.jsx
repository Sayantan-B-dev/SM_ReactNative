import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {users} from './userContact';
import ContactItem from '../../components/ContactItem';

const ContactListScreen = () => {
  const renderItem = ({items}) => {
    <ContactItem name={items.name} email={items.email} />;
  };
  return (
    <FlatList>
      data={users}
      renderItems={renderItem}
      keyExtractor={(item)=>item.id}
    </FlatList>
  );
};

export default ContactListScreen;
