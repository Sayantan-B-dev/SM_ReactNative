/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import AlertMessage from './src/components/AlertMessage';

const App = () => {
  return (
    <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
      <AlertMessage/>
    </View>
  );
};

export default App;
