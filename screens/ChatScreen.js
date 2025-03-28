import React from "react";
import {Text,View, FlatList} from "react-native";
import chats from '../assets/data/chats.json';
// import { FlatList } from "react-native-gesture-handler";
import ChatListItem from "../assets/components/ChatListItem";

const ChatScreen = () => {
    return(
      <View>
        <FlatList 
          data={chats}
          renderItem={({ item }) => 
            <ChatListItem chat={item} />
          }
        />
      </View>
    )
}

export default ChatScreen;