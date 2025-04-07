const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const customConfig = {}; // Your custom Metro config can go here

const baseConfig = mergeConfig(getDefaultConfig(__dirname), customConfig);

module.exports = withNativeWind(baseConfig, {
  input: './global.css',  // Optional, if you're using a global.css file
});
