import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const dummyData = [
  {id: 1, title: 'Learn React Native'},
  {id: 2, title: 'Build a Mobile App'},
  {id: 3, title: 'Master JavaScript'},
  {id: 4, title: 'Explore AI & ML'},
  {id: 5, title: 'Contribute to Open Source'},
  {id: 6, title: 'Understand Redux'},
  {id: 7, title: 'Deploy an App'},
  {id: 8, title: 'Use Firebase for Backend'},
  {id: 9, title: 'Learn TypeScript'},
  {id: 10, title: 'Optimize Performance'},
];

const FlatListData = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'wheat',
    padding: 10,
    borderRadius: 20,
  },
  list: {
    borderRadius: 20,
    paddingHorizontal: 15,
    textDecorationStyle: 'underline',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'purple',
  },
  item: {
    marginVertical: 10,
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'olive',
  },
  text: {
    color: 'white',
    fontSize: 30,
    letterSpacing: 2,
  },
});
export default FlatListData;
