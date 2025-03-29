import React, { useEffect } from "react";
import { Text, View, ImageBackground, StyleSheet, FlatList, TextInput, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Message from "../components/Message";
import InputBox from "../components/InputBox";

// import bg from '../assets/images/luguang.jpg';
import messages from '../data/messages.json'


const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({ 
  //     title: route.params.name 
  //   });
  // }, [route.params?.name]);

  useEffect(() => {
      navigation.setOptions({ 
        headerTitle: () => (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: route.params.image }}/>
            <Text style={styles.name}>{ route.params.name }</Text>
          </View>
        )
      });
    }, [route.params?.name]);
 

    return(
      // <ImageBackground source={bg} style={styles.bg}></ImageBackground>
      <View style={styles.bg}>
      
        <FlatList
          data={messages}
          renderItem={({item}) => <Message message={item} />}
          // style={styles.list}
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
  }
})

export default ChatScreen;