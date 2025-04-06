/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import GET_API_LIST from './src/components/GET_API_LIST';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <GET_API_LIST/>
    </View>
  );
};

export default App;
