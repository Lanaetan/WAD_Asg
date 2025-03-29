import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, FlatList, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Message from "../components/Message";
import InputBox from "../components/InputBox";

// import bg from '../assets/images/luguang.jpg';
import messages from '../data/messages.json'


const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params?.name]);
 

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