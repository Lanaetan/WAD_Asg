import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import chats from '../data/chats.json';
import ChatListItem from '../components/ChatListItem';
import {
  getConversation,
  getLatestMessageBetween,
  getChatlist,
} from '../services/db/messageService';


const ChatsScreen = () => {
  const [conversation, setConversation] = useState<any[]>([]);
  const [latestMessage, setLatestMessage] = useState();
  const [chatlist, setChatlist] = useState([]);
  const userId = '3';

  const _query = async () => {
    const list = await getChatlist(userId);
    setChatlist(list);

    console.log(list); // This will correctly log the new data

    if (list.length > 0) {
      console.log('Got message');
    } else {
      console.log('No message found');
    }
  };

  useEffect(() => {
    _query();
  }, []);

  return (
    <View>
      <FlatList
        data={chatlist}
        renderItem={({item}) => <ChatListItem chat={item} />}
      />
    </View>
  );
};

export default ChatsScreen;
