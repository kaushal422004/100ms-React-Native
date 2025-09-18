// src/components/VideoGrid.js

import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
// Make sure these 100ms imports are correct
import { useHMSStore, selectPeers } from '@100mslive/react-native-hms';
// Make sure this local import is correct
import PeerTile from './PeerTile'; // <-- Check this import path and name

const VideoGrid = () => {
  const peers = useHMSStore(selectPeers);

  return (
    <View style={styles.container}>
      <FlatList
        data={peers}
        renderItem={({ item }) => <PeerTile peer={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    justifyContent: 'center',
  },
});

// CRITICAL LINE: Ensure this export exists and is a default export.
export default VideoGrid;