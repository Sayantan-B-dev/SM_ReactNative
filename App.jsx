/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import Search from './src/components/Search';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <Search/>
    </View>
  );
};

export default App;
