/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import HideShowToggle from './src/components/HideShowToggle';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <HideShowToggle/>
    </View>
  );
};

export default App;
