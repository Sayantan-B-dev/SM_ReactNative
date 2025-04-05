/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import PressableComponent from './src/components/PressableComponent';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <PressableComponent/>
    </View>
  );
};

export default App;
