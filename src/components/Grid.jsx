import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

export const data = [
  {id: '1', name: 'Aarav', mobile: '9876543210'},
  {id: '2', name: 'Vihaan', mobile: '9123456780'},
  {id: '3', name: 'Ishaan', mobile: '9988776655'},
  {id: '4', name: 'Kabir', mobile: '9090909090'},
  {id: '5', name: 'Anaya', mobile: '8888888888'},
  {id: '6', name: 'Myra', mobile: '9012345678'},
  {id: '7', name: 'Advika', mobile: '8901234567'},
  {id: '8', name: 'Diya', mobile: '8765432109'},
  {id: '9', name: 'Aadhya', mobile: '9345678123'},
  {id: '10', name: 'Arjun', mobile: '9000000000'},
  {id: '11', name: 'Riya', mobile: '9876512345'},
  {id: '12', name: 'Aryan', mobile: '9834567890'},
  {id: '13', name: 'Saanvi', mobile: '9753124680'},
  {id: '14', name: 'Krishna', mobile: '9658741230'},
  {id: '15', name: 'Tanish', mobile: '9532147850'},
  {id: '16', name: 'Meera', mobile: '9870001111'},
  {id: '17', name: 'Reyansh', mobile: '9312456789'},
  {id: '18', name: 'Laksh', mobile: '9823456781'},
  {id: '19', name: 'Ira', mobile: '9456123789'},
  {id: '20', name: 'Shaurya', mobile: '9988771234'},
  {id: '21', name: 'Kavya', mobile: '9445567890'},
  {id: '22', name: 'Ayaan', mobile: '9365478920'},
  {id: '23', name: 'Trisha', mobile: '9234567890'},
  {id: '24', name: 'Pari', mobile: '9221133445'},
  {id: '25', name: 'Vivaan', mobile: '9663344556'},
  {id: '26', name: 'Rudra', mobile: '9112233445'},
  {id: '27', name: 'Zoya', mobile: '9447788990'},
  {id: '28', name: 'Aanya', mobile: '9323344556'},
  {id: '29', name: 'Harsh', mobile: '9887766554'},
  {id: '30', name: 'Neha', mobile: '9776655443'},
];

const Grid = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.childContainer}>
        <Text style={style.heading}>Grid</Text>
        <ScrollView contentContainerStyle={style.itemContainer}>
          {data.map(item => (
            <View key={item.id} style={style.gridItem}>
              <Text style={style.itemText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
  },
  childContainer: {
    flex: 1,
    backgroundColor: 'wheat',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'olive',
    width: '48%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  itemText: {
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default Grid;
