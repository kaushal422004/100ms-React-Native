// src/context/AppContext.js

import React, { createContext, useState, useContext } from 'react';

// 1. Create the context object. This is what components will use to access the state.
const AppContext = createContext(null);

/**
 * 2. Create the Provider component.
 * This component will wrap your entire application (or parts of it)
 * and make the context's `value` available to all child components.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 */
export const AppProvider = ({ children }) => {
  // --- State Management ---
  // Store the user's name, entered on the AuthScreen.
  const [username, setUsername] = useState('');
  // Store the room ID, entered on the JoinRoomScreen.
  const [roomId, setRoomId] = useState('');
  // Store the global loading state (e.g., when joining a room).
  const [isLoading, setIsLoading] = useState(false);
  // Store any global error messages.
  const [error, setError] = useState(null);

  // The `value` object contains all the state and functions we want to make
  // available to the rest of the app.
  const value = {
    username,
    setUsername,
    roomId,
    setRoomId,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  // Render the provider, passing the `value` to all children.
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

/**
 * 3. Create a custom hook for easy access.
 * This hook simplifies using the context. Instead of importing `useContext` and `AppContext`
 * in every component, you can just import and call `useAppContext()`.
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  // This check ensures that the hook is only used within a component that is
  // a child of `AppProvider`, preventing common bugs.
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};