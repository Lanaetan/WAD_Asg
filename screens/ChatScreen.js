import React from "react";
import { Text, View, ImageBackground, StyleSheet, FlatList } from "react-native";
import Message from "../assets/components/Message";

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
          inverted
        />

        
      </View>
    )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#e3e6e5',
  }
})

export default ChatScreen;