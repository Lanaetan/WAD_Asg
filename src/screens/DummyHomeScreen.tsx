import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatScreen from './ChatScreen';
import DummyChatScreen from './DummyChatScreen';

const DummyHomeScreen = () => {
  const [showLoginView, setShowLoginView] = useState(true); // Fixed boolean
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [allChatRooms, setAllChatRooms] = useState([]);

  const navigation = useNavigation();

  function handleRegisterAndSignIn(isLogin: boolean) {
    if (currentUserName.trim() !== '') {
      const index = allUsers.findIndex(
        userItem => userItem === currentUserName,
      );

      if (isLogin) {
        if (index === -1) {
          Alert.alert('Please register first');
        } else {
          setCurrentUser(currentUserName);
        }
      } else {
        if (index === -1) {
          setAllUsers([...allUsers, currentUserName]);
          setCurrentUser(currentUserName);
        } else {
          Alert.alert('Already registered! Please login.');
        }
      }
    } else {
      Alert.alert('User name field is empty');
    }
  }

  useEffect(() => {
    if (currentUser.trim() !== '') 
      navigation.navigate('DummyChat', {currentUser, allChatRooms});
  }, [currentUser]);

  console.log(allUsers, currentUser);

  return (
    <View style={styles.container}>
      {showLoginView ? (
        <View>
          <TextInput
            autoCorrect={false}
            placeholder="Enter username"
            onChangeText={value => setCurrentUserName(value)}
            value={currentUserName}
            style={styles.input}
          />
          <Pressable
            style={styles.button}
            onPress={() => handleRegisterAndSignIn(false)}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleRegisterAndSignIn(true)}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.messageText}>Connect, Grow and Inspiration</Text>
          <Pressable
            style={styles.button}
            onPress={() => setShowLoginView(true)}>
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    width: 250,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  messageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DummyHomeScreen;
