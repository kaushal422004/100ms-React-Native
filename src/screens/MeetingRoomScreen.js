// src/screens/MeetingRoomScreen.js

import React from 'react';
import { HMSPrebuilt } from '@100mslive/react-native-room-kit';
import { useAppContext } from '../context/AppContext';


const MeetingRoomScreen = () => {
  const { username } = useAppContext();
  return (
    <HMSPrebuilt roomCode="cso-rgkn-uen" userName={username} />
  );
};

export default MeetingRoomScreen;