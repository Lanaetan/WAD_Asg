import React from "react";
import { Text, View, ImageBackground, StyleSheet, FlatList, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather"

import Message from "../assets/components/Message";
import InputBox from "../assets/components/InputBox";

// import bg from '../assets/images/luguang.jpg';
import messages from '../assets/data/messages.json'


const ChatScreen = () => {

  const bg = require('../assets/images/luguang.jpg');
    return(
      // <ImageBackground source={bg} style={styles.bg}></ImageBackground>
      <View style={styles.bg}>
      
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          style={styles.list}
        />
        <InputBox />
      </View>
    )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#e3e6e5',
  },
})

export default ChatScreen;