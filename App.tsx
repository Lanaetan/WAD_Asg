import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput} from 'react-native';
import Navigator from './src/navigation';
import {io, Socket} from 'socket.io-client';

const App = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null); // ✅ Define Type for Socket

  useEffect(() => {
    // const newSocket = io('http://192.168.0.9:3000'); // ✅ Ensure proper socket initialization
    setSocket(io('http://192.168.0.9:3000'));

    // return () => {
    //   newSocket.disconnect(); // ✅ Clean up the socket connection
    // };
  }, []);

  const submitChatMessage = () => {
    if (!socket) {
      console.error('Socket is not connected');
      return;
    }
    if (socket) {
      socket.emit('chat message', chatMessage); // ✅ No more TypeScript error
      setChatMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        style={{height: 40, borderWidth: 2}}
        autoCorrect={false}
        onChangeText={setChatMessage}
        value={chatMessage}
        onSubmitEditing={submitChatMessage}
      /> */}
      <Navigator />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default App;
