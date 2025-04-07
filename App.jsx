import {View} from 'react-native';
import React from 'react';
import MyLogin from './src/components/Mylogin';

import './global.css'; // Import global styles
const App = () => {
  return (
    <View  className="flex-1">
      <MyLogin />
    </View>
  );
};

export default App;
//
//
//
//
//
//
//
//
// import React from 'react';
// import {StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Home from './src/navigation-screens/Home';
// import Login from './src/navigation-screens/Login';
// import About from './src/navigation-screens/About';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor="#1e1e1e"
//         translucent={false}
//       />
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             animation: 'slide_from_right',
//             headerShown: false,
//           }}>
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{
//               title: 'Navigation',
//               headerShown: true,
//               headerStyle: {
//                 backgroundColor: '#4CAF50', // background color of the header
//               },
//               headerTintColor: '#fff', // color of back button and title
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//                 fontSize: 20,
//                 letterSpacing: 2,
//               },
//               headerTitleAlign: 'center',
//             }}
//           />
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="About" component={About} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };
// export default App;
//
//
//
//
//
//
//
//
// import 'react-native-gesture-handler';//swipe open the drawer
// // Core React and React Native imports
// import { View, Text, Button } from 'react-native';
// // Navigation container to wrap the entire navigation structure
// import { NavigationContainer } from '@react-navigation/native';
// // Function to create a drawer-based navigation
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import React from 'react';

// // Create a Drawer Navigator object
// // This object will be used to define screens and navigation behavior
// const Drawer = createDrawerNavigator();

// // Each screen receives a `navigation` prop, which provides various navigation methods
// // `navigation.openDrawer()` is used to open the drawer programmatically
// const ProfileScreens = ({ navigation }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Profile Screen</Text>
//     {/* onPress triggers openDrawer function to open drawer manually */}
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>
// );

// const SettingsScreens = ({ navigation }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Settings Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>
// );

// const HomeScreens = ({ navigation }) => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>
// );

// // Main App component
// const App = () => {
//   return (
//     // NavigationContainer is required to manage the navigation tree
//     // It must wrap the entire navigator structure
//     <NavigationContainer>

//       {/* Drawer.Navigator is used to define drawer-related settings and screens */}
//       <Drawer.Navigator
//         // screenOptions allows you to customize the look and behavior of all screens
//         screenOptions={{
//           drawerStyle: {
//             // Set drawer background and width
//             backgroundColor: 'white',
//             width: 240,
//           },
//           drawerLabelStyle: {
//             // Style for labels in drawer menu
//             fontSize: 10,
//             color: '#333',
//           },
//           headerStyle: {
//             // Header (top bar) styling for each screen
//             backgroundColor: 'blue',
//           },
//           headerTintColor: 'wheat', // Color of header text and icons
//           headerTitleAlign: 'center', // Center-align the title in header
//         }}
//       >
//         {/* Drawer.Screen defines each route/screen shown in the drawer menu */}
//         {/* `name` is the label shown in the drawer */}
//         {/* `component` is the React component to render */}
//         <Drawer.Screen name="Home" component={HomeScreens} />
//         <Drawer.Screen name="Profile" component={ProfileScreens} />
//         <Drawer.Screen name="Settings" component={SettingsScreens} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
//
//
//
//
//
//
//
//
// // Importing required components and modules
// import {View, Text} from 'react-native'; // Basic UI components for layout and text
// import React from 'react'; // React library for building component-based UIs
// import {NavigationContainer} from '@react-navigation/native'; // Wraps the navigation structure, must be at the root
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; // Creates a bottom tab navigation bar
// import Icon from 'react-native-vector-icons/Ionicons'; // Imports Ionicons (icon set) to use in tab bar

// // Creating the tab navigator instance
// const Tab = createBottomTabNavigator(); // This creates a navigator object that handles tab navigation

// // ---------------------- Screens ---------------------- //
// const Home = () => {
//   // This is the "Home" screen component
//   return (
//     <View> {/* View is a container for other components */}
//       <Text>Home Screen</Text> {/* Simple text displayed on the Home screen */}
//     </View>
//   );
// };

// const Profile = () => {
//   // This is the "Profile" screen component
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// const Setting = () => {
//   // This is the "Setting" screen component (you named it "Add Post Screen")
//   return (
//     <View>
//       <Text>Add Post Screen</Text>
//     </View>
//   );
// };

// // ---------------------- Icon Renderer ---------------------- //
// const getTabBarIcon = (routeName, focused, color, size) => {
//   // This function returns the appropriate icon for each tab
//   let iconName; // Variable to store the name of the Ionicon icon

//   // Check the route name and set icon based on whether it is focused or not
//   if (routeName === 'Home') {
//     iconName = focused ? 'home' : 'home-outline'; // Filled icon when focused, outlined when not
//   } else if (routeName === 'Profile') {
//     iconName = focused ? 'person' : 'person-outline'; // Profile icons
//   } else if (routeName === 'Setting') {
//     iconName = focused ? 'settings' : 'settings-outline'; // Settings icons
//   }

//   // Return the icon component
//   return <Icon name={iconName} size={size} color={color} />;
// };

// // ---------------------- App Component ---------------------- //
// const App = () => {
//   // Root component of the app
//   return (
//     <NavigationContainer>
//       {/* This wraps the entire navigation system — required at root */}
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           // screenOptions takes a function that returns options per route
//           tabBarIcon: ({focused, color, size}) =>
//             getTabBarIcon(route.name, focused, color, size),
//           // Sets the icon based on route and focus status

//           tabBarActiveTintColor: '#4CAF50',
//           // Color for active (focused) tab icon

//           tabBarInactiveTintColor: 'gray',
//           // Color for inactive tab icon

//           tabBarStyle: {
//             // Styles the tab bar (bottom area)
//             backgroundColor: '#1e1e1e', // Dark background color
//             borderTopWidth: 0, // Removes the top border of the tab bar
//             elevation: 0, // Removes shadow/elevation (for Android)
//           },
//         })}>
//         {/* Defining each tab screen with a name and component */}
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Profile" component={Profile} />
//         <Tab.Screen name="Setting" component={Setting} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// // Exporting the main App component to be used as entry point
// export default App;
//
//
//
//
//
//
//
//
// // Import necessary components from react-native
// import {View, Text, StyleSheet, StatusBar} from 'react-native';
// // 'View' is like a box or container.
// // 'Text' is used to show text.
// // 'StyleSheet' helps us write clean styles in one place.
// // 'StatusBar' lets us customize the top status bar (like battery, time).

// // Import React to create functional components
// import React from 'react';

// // Import NavigationContainer to hold the navigation system
// import {NavigationContainer} from '@react-navigation/native';

// // Import top tab navigator to make a tab bar at the top (like WhatsApp)
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// // Create the top tab navigator
// const Tab = createMaterialTopTabNavigator();

// // Create the Chat screen
// const ChatScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.screenText}>💬 Chat Screen</Text>
//   </View>
// );

// // Create the Status screen
// const StatusScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.screenText}>📸 Status Screen</Text>
//   </View>
// );

// // Create the Calls screen
// const CallsScreen = () => (
//   <View style={styles.screen}>
//     <Text style={styles.screenText}>📞 Calls Screen</Text>
//   </View>
// );

// // Main App component
// const App = () => {
//   return (
//     <>
//       {/* Fake height for status bar (25px) */}
//       <View style={{height: 25, backgroundColor: '#121212'}} />
//       {/* Real native status bar */}
//       <StatusBar backgroundColor="#121212" barStyle="light-content" />

//       {/* Main Navigation system of the app */}
//       <NavigationContainer>
//         {/* Top tab navigator with 3 screens */}
//         <Tab.Navigator
//           screenOptions={{
//             tabBarActiveTintColor: '#4CAF50', // Active tab color
//             tabBarInactiveTintColor: 'gray', // Inactive tab color
//             tabBarShowLabel: true, // Show text labels
//             tabBarStyle: {
//               backgroundColor: '#1e1e1e', // Dark background
//               elevation: 4, // Shadow for Android
//             },
//             tabBarLabelStyle: {
//               fontSize: 14,
//               fontWeight: '600',
//               textTransform: 'capitalize',
//             },
//             tabBarIndicatorStyle: {
//               backgroundColor: '#4CAF50', // Line under the active tab
//               height: 3,
//               borderRadius: 2,
//             },
//           }}>
//           <Tab.Screen name="Chats" component={ChatScreen} />
//           <Tab.Screen name="Status" component={StatusScreen} />
//           <Tab.Screen name="Calls" component={CallsScreen} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// // Define all styles at one place using StyleSheet
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1, // Takes full screen space
//     justifyContent: 'center', // Center content vertically
//     alignItems: 'center', // Center content horizontally
//     backgroundColor: '#121212', // Dark background
//   },
//   screenText: {
//     color: 'white', // White text
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;
