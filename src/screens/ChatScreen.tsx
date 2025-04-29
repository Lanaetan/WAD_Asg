import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import io from 'socket.io-client';

import Message from '../components/Message';
import InputBox from '../components/InputBox';
import luguang from '../assets/images/luguang.jpg';

// import bg from '../assets/images/luguang.jpg';
import messages from '../data/messages.json';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const socket = io(`http://192.168.0.13:5000/chat`, {
  transports: ['websocket'],
});

const ChatScreen = ({route, navigation}: any) => {
  const [name, setName] = useState('Your Name');
  const [message, setMessage] = useState('');
  const [chatroom, setChatroom] = useState<any[]>([]);
  const [myId, setMyId] = useState('u2');

  const {conversation} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.container}>
          <Image style={styles.image} source={luguang} />
          {/* <Text style={styles.name}>{route.params.name}</Text> */}
        </View>
      ),
    });
  }, []);
  // }, [route.params?.name]);

  useEffect(() => {
    // When connected, emit a message to the server to inform that this client has connected to the server.
    // Display a Toast to inform user that connection was made.
    socket.on('connect', () => {
      console.log(socket.id); // undefined
      socket.emit(
        'mobile_client_connected',
        {connected: true},
        (response: any) => {
          console.log(response);
        },
      );
      ToastAndroid.show('Connected to server', ToastAndroid.LONG);
    });

    socket.on('connect_to_client', (data: any) => {
      let greets = JSON.parse(data);
      console.log(greets);
    });

    // Handle connection error
    socket.on('error', (error: any) => {
      ToastAndroid.show('Failed to connect to server', ToastAndroid.LONG);
    });

    // Receive chat broadcast from server.
    const handleMessageBroadcast = (data: any) => {
      let messageBag = JSON.parse(data);
      setChatroom(chatroom => [
        ...chatroom,
        // `Message from ${messageBag.sender} at ${messageBag.timestamp}: \n${messageBag.message}\n\n`,
        {
          sender: messageBag.sender,
          text: messageBag.message,
          createdAt: messageBag.timestamp,
        },
      ]);
    };

    socket.on('message_broadcast', handleMessageBroadcast);

    return () => {
      socket.off('message_broadcast', handleMessageBroadcast);
    };
  }, []);

  return (
    // <ImageBackground source={bg} style={styles.bg}></ImageBackground>
    <View style={styles.bg}>
      {/* from lecture */}
      {/* <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          selectTextOnFocus={true}
          onChangeText={(name: string) => {
            setName(name);
          }}
        />
        <TextInput
          style={styles.output}
          value={chatroom}
          multiline={true}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter message"
          value={message}
          selectTextOnFocus={true}
          onChangeText={(message: string) => {
            setMessage(message);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            socket.emit('message_sent', {
              sender: name,
              message: message,
            });
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Send</Text>
          </View>
        </TouchableOpacity>
      </ScrollView> */}
      {/* end lecture */}

      {/* Below is my own */}

      <FlatList
        data={chatroom}
        renderItem={({item}) => {
          console.log('Item passed to Message:', item); // ✅ Add this line
          return <Message message={item} myId={myId} />;
        }}
        // style={styles.list}
        keyExtractor={(item, index) => index.toString()}
      />
      <InputBox
        value={message}
        onChangeText={(message: string) => {
          setMessage(message);
        }}
        onSend={() => {
          if (message.trim()) {
            socket.emit('message_sent', {
              // senderId: myId,
              sender: myId,
              message: message,
              timestamp: new Date().toISOString(),
            });
            setMessage(''); // clear input
          }
        }}
      />

      {/* <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item} />}
        // style={styles.list}
      />
      <InputBox /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   backgroundColor: '#fff',
  // },
  input: {
    fontSize: 16,
    color: '#000099',
    marginTop: 10,
    marginBottom: 10,
  },
  output: {
    height: 400,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
    color: 'black',
  },
  button: {
    padding: 20,
    backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  // Above is lecture
  bg: {
    flex: 1,
    backgroundColor: '#e3e6e5',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ChatScreen;
