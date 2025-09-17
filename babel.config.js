// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
      // ... your other plugins
      'react-native-reanimated/plugin', // This MUST be the last plugin
  ],
};