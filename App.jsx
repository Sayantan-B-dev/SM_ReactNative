/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import DELETE_API from './src/components/DELETE_API';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <DELETE_API/>
    </View>
  );
};

export default App;
