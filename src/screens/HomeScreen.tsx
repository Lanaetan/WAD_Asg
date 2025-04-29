import React, {useState,useEffect} from "react";
import {Text,View,TextInput,Pressable,Alert, Keyboard} from "react-native";
import ChatsScreen from './ChatsScreen';

const App = ({navigation, route}: any) => {

  const [showLoginView, setShowLoginView] = useState(true);
  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [allUsers, setAllUsers] = useState<string[]>([]);

  function handleRegisterAndSignIn(isLogin: boolean){
    if(currentUserName.trim() !== ''){

      const index = allUsers.findIndex(userItem => userItem === currentUserName);

      if(isLogin){ // Login
        if(index === -1) { // not registered
          Alert.alert('Please register first')
        } else { // user is registered
          setCurrentUser(currentUserName)
        }
      } else {  // Register
        if(index === -1){
          setAllUsers([...allUsers, currentUserName])
          setCurrentUser(currentUserName)
        } else {
          Alert.alert('Already registered! Please login')
        }
      }
      setCurrentUserName('');

    } else {
      Alert.alert('User name field is empty');
    }

    Keyboard.dismiss();
  }

  console.log(allUsers);

  useEffect(()=>{
    if(currentUser.trim() !== ''){
      navigation.navigate("Chats");
    }
  }, [currentUser]);

  return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        {
          showLoginView ?
          <View>
            <Text>Enter Your User Name</Text>
            <TextInput 
              autoCorrect={false} 
              placeholder="Enter username" 
              style={{borderWidth: 1,}}
              onChangeText={(value)=>setCurrentUserName(value)}
              value={currentUserName}
            />
            <Pressable 
              style={{backgroundColor: 'lightblue', marginBottom: 20}}
              onPress={()=>handleRegisterAndSignIn(false)}
              >
              <Text>Register</Text>
            </Pressable >
            <Pressable style={{backgroundColor: 'lightblue'}}
              onPress={()=>handleRegisterAndSignIn(true)}
            >
              <Text>Login</Text>
            </Pressable>
          </View>
          
          : <View></View>
        }
      </View>
    )
}

export default App;