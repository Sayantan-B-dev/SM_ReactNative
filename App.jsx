// /* eslint-disable react-native/no-inline-styles */
// import {View} from 'react-native';
// import PlatformExample from './src/components/PlatformExample';
// const App = () => {
//   return (
//     <View  style={{flex: 1,borderTopWidth:25,borderColor:'black'}}>
//       <PlatformExample/>
//     </View>
//   );
// };
// export default App;

import React from 'react';
import {StatusBar, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/navigation-screens/Home';
import Login from './src/navigation-screens/Login';
import About from './src/navigation-screens/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1e1e1e"
        translucent={false}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Navigation', 
              headerShown: true,
              headerStyle: {
                backgroundColor: '#4CAF50', // background color of the header
              },
              headerTintColor: '#fff', // color of back button and title
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
                letterSpacing: 2,
              },
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
