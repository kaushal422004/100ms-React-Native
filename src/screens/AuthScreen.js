import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useAppContext } from '../context/AppContext';

const AuthScreen = ({ navigation }) => {
  const { username, setUsername, isLoading, setIsLoading, setError } = useAppContext();

  const handleContinue = () => {
    setError(null);
    if (username.trim()) {
      setIsLoading(true);
      // Simulate a quick validation or setup
      setTimeout(() => {
        setIsLoading(false);
        navigation.replace('JoinRoom');
      }, 500);
    } else {
      setError('Please enter your name.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to 100ms Meet</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={username}
        onChangeText={setUsername}
        editable={!isLoading}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <Button title="Continue" onPress={handleContinue} disabled={isLoading} />
      )}
    </View>
  );
};

// ... keep your existing styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
});


export default AuthScreen;