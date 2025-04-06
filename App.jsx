/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import PlatformExample from './src/components/PlatformExample';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <PlatformExample/>
    </View>
  );
};

export default App;
