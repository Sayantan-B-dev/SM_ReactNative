import {View, Text, SectionList, StyleSheet} from 'react-native';
import React from 'react';

const fakeData = [
  {
    title: 'Tropical Fruits',
    data: [
      {id: 1, fruit: 'Mango'},
      {id: 2, fruit: 'Pineapple'},
      {id: 3, fruit: 'Banana'},
      {id: 4, fruit: 'Papaya'},
    ],
  },
  {
    title: 'Berries',
    data: [
      {id: 5, fruit: 'Strawberry'},
      {id: 6, fruit: 'Blueberry'},
      {id: 7, fruit: 'Raspberry'},
      {id: 8, fruit: 'Blackberry'},
    ],
  },
  {
    title: 'Citrus Fruits',
    data: [
      {id: 9, fruit: 'Orange'},
      {id: 10, fruit: 'Lemon'},
      {id: 11, fruit: 'Lime'},
      {id: 12, fruit: 'Grapefruit'},
    ],
  },
  {
    title: 'Stone Fruits',
    data: [
      {id: 13, fruit: 'Peach'},
      {id: 14, fruit: 'Cherry'},
      {id: 15, fruit: 'Plum'},
      {id: 16, fruit: 'Apricot'},
    ],
  },
];

const SectionListData = () => {
  const renderItem = ({item}) => (
    <View style={style.item}>
      <Text style={style.title}>{item.fruit}</Text>
    </View>
  );
  const renderSectionHeader = ({section}) => (
    <View style={style.header}>
      <Text style={style.headerText}>{section.title}</Text>
    </View>
  );
  return (
    <View style={style.container}>
      <SectionList
        sections={fakeData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    paddingTop: 50,
    height: '100%',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    fontSize: 24,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    backgroundColor: 'lightgray',
    padding: 20,
    fontStyle: 'bold',
    fontWeight: '900',
  },
});
export default SectionListData;
