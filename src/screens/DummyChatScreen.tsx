import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const DummyChatScreen = () => {
  const route = useRoute();
  const {currentUser, allChatRooms} = route.params ?? {currentUser: 'Guest'}; // Default value

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text>Welcome {currentUser}</Text>
          <Pressable>
            <Feather name="bell" size={22} />
          </Pressable>
        </View>
      </View>
      <View style={styles.listContainer}>
        {
          allChatRooms && allChatRooms.length > 0 ?
          <FlatList 
            data={allChatRooms}
            renderItem={({item}) => <DummyChatComponent item={item} />}
            keyExtractor={(item) => item.id
          }

          /> : null
        }

      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.button}>
          <View>
            <Text>Create New Group</Text>
          </View>
        </Pressable>

      </View>
    </View>
    
  );
};

export default DummyChatScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
topContainer: {},
header: {},
listContainer: {},
bottomContainer: {},
button: {
  backgroundColor: 'lightblue',
  color: 'white',
  padding: 5,
  borderColor: 'black',
  borderWidth: 1,
},
});
