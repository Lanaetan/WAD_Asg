import React from "react";
import { StyleSheet, Text, View } from "react-native";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {

  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

    return(
      <View style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#badedb' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        }
        ]}>
        <Text>{message.text}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end'
  }
})

export default Message;