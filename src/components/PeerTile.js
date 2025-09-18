// src/components/PeerTile.js

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
// Import the HMSVideoView component, which is the actual video player.
import { HMSVideoView } from '@100mslive/react-native-hms';

// Get the screen width to calculate tile size dynamically.
const { width } = Dimensions.get('window');
const tileWidth = width / 2;

/**
 * Renders a single tile for a participant, showing their video and name.
 * @param {object} props - Component props.
 * @param {object} props.peer - The 100ms peer object.
 */
const PeerTile = ({ peer }) => {
  return (
    <View style={styles.container}>
      {/* The HMSVideoView component requires a `trackId` to know which video stream to display. */}
      {/* We check if `peer.videoTrack?.trackId` exists before rendering. */}
      {peer.videoTrack?.trackId ? (
        <HMSVideoView
          trackId={peer.videoTrack.trackId}
          style={styles.video}
          // `scaleType` controls how the video fits into the view.
          // 'cover' scales the video to fill the container, cropping if necessary.
          scaleType="cover"
        />
      ) : (
        // If the peer has no video track (e.g., camera is off or audio-only),
        // we display a placeholder view with their initial.
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {peer.name.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}
      {/* Display the peer's name at the bottom of the tile. */}
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{peer.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: tileWidth,
    height: tileWidth,
    backgroundColor: '#2e2e2e',
    borderColor: '#424242',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c3c3c',
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  nameContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  nameText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default PeerTile;