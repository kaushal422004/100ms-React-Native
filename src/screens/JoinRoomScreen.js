import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAppContext } from '../context/AppContext';

const JoinRoomScreen = ({ navigation }) => {
  const { roomId, setRoomId, setError } = useAppContext();

  const handleJoin = () => {
    setError(null);
    if (roomId.trim()) {
      console.log(roomId);
      navigation.replace('MeetingRoom');
    } else {
      Alert.alert('Error', 'Please enter a Room ID.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join or Create a Meeting</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Room ID"
        value={roomId}
        onChangeText={(text) => { console.log(text); setRoomId(text); }}
      />
      <Button title="Join Room" onPress={handleJoin} />
    </View>
  );
};

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
  label: {
    fontSize: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
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

export default JoinRoomScreen;
