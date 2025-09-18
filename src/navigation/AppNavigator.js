// src/navigation/AppNavigator.js

import React from 'react';
// Import navigation core functionalities.
import { NavigationContainer } from '@react-navigation/native';
// Import the stack navigator, which allows transitioning between screens.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import the screens you've created.
import AuthScreen from '../screens/AuthScreen';
import JoinRoomScreen from '../screens/JoinRoomScreen';
import MeetingRoomScreen from '../screens/MeetingRoomScreen';

// Create a new Stack navigator instance.
const Stack = createNativeStackNavigator();

/**
 * The main navigator for the application.
 * It defines all the screens and their presentation options.
 */
const AppNavigator = () => {
  return (
    // The NavigationContainer is the root component that manages the navigation tree.
    <NavigationContainer>
      {/* The Stack.Navigator contains all the screens in the stack. */}
      <Stack.Navigator
        // `initialRouteName` sets the first screen to be displayed when the app loads.
        initialRouteName="Auth"
        // `screenOptions` apply default styles/behaviors to all screens in this navigator.
        screenOptions={{
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          animation: 'slide_from_right', // A nice transition animation.
        }}
      >
        {/* Define the "Auth" screen. */}
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: 'Welcome' }} // Set a custom title for the header bar.
        />
        {/* Define the "JoinRoom" screen. */}
        <Stack.Screen
          name="JoinRoom"
          component={JoinRoomScreen}
          options={{ title: 'Join a Meeting' }}
        />
        {/* Define the "MeetingRoom" screen. */}
        <Stack.Screen
          name="MeetingRoom"
          component={MeetingRoomScreen}
          // We hide the header for the meeting room to have a full-screen video experience.
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;