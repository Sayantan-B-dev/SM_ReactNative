import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SecondClass from './SecondClass';

class ClassComponent extends Component {
  render() {
    return (
      <View>
        <Text>Class component</Text>
        <SecondClass age={25}/>
      </View>
    );
  }
}
export default ClassComponent;
