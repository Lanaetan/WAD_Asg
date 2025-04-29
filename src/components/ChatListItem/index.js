import { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import luguang from '../../assets/images/luguang.jpg';
import { getConversation } from '../../services/db/messageService';

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();
  const [conversation, setConversation] = useState(null); // Make sure it's a single object if you're not expecting an array

  useEffect(() => {
    const temp_conversation = getConversation('1', '3');
    setConversation(temp_conversation);
    console.log(temp_conversation); // Verify if data is correct
  }, []);

  return (
    <Pressable onPress={() => navigation.navigate('Chat', { conversation })} style={styles.container}>
      <Image source={luguang} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.row}>
          {/* You can customize what to show as the user name */}
          <Text numberOfLines={1} style={styles.name}>{chat?.id}</Text>
          <Text style={styles.subTitle}>{dayjs(chat?.createdAt).fromNow()}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>{chat?.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: 'lightgray',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
  },
  subTitle: {
    color: 'gray',
  }
});

export default ChatListItem;
