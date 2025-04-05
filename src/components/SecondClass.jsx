import {Text, View,Button} from 'react-native';
import React, {Component} from 'react';

class SecondClass extends Component {
  constructor() {
    super();
    this.state = {
      myName: '',
    };
  }
  updateName = () => {
    this.setState(prevState => ({
      myName: prevState.myName === 'Sayantan' ? 'Sayan' : 'Sayantan'
    }));
  };
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>myName: {this.state.myName}. Age: {this.props.age}</Text>
        <Button title="update" onPress={this.updateName} />
      </View>
    );
  }
}

export default SecondClass;
