import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    // Wrap the entire app in GestureHandlerRootView
    <GestureHandlerRootView style={styles.container}>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </GestureHandlerRootView>
  );
};

// It's important to add flex: 1 to the root view
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;