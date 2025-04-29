import { Alert } from 'react-native';

let config = require('../../../Config');

const openCallback = () => {
  console.log('database open success');
}

const errorCallback = (err: any) => {
  console.log('Error in opening the database: ' + err);
}

// Get all messages
export const getMessages = (): Promise<any> => {
  let url = config.settings.serverPath + '/api/messages';

    return fetch(url)
    .then(response => {
      console.log(response);
      if (!response.ok) {
      Alert.alert('Error:', response.status.toString());
      throw Error('Error ' + response.status);
      }
      return response.json();
    })
    .then((messages: any) => {
        console.log(messages);
        return messages;
    })
    .catch(error => {
        console.log(error);
    });
}

// Get message by ID
export const getMessageById = ( messageId: string ): Promise<any> => {

  let url = config.settings.serverPath + '/api/messages/' + messageId;

  return fetch(url)
    .then(response => {
        if (!response.ok) {
          Alert.alert('Error: ' + response.status.toString());
          throw Error('Error fetching student data');
        }
        return response.json();
    })
    .then((message: any) => {
        return message;
    })
    .catch((error: any) => {
        console.error(error);
    });
}

// Create a new message
export const createMessage = ( 
    receiver_id: string,
    sender_id: string,
    text: string,
    created_at: string,
  ): Promise<any> => {

    let url = config.settings.serverPath + '/api/messages';

    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver_id: receiver_id,
        sender_id: sender_id,
        text: text,
        created_at: created_at,
      }),
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          Alert.alert('Error:', response.status.toString());
          throw Error('Error ' + response.status);
        }

        return response.json();
      })
      .then(respondJson => {
        if (respondJson.affected > 0) {
          Alert.alert('Record SAVED for', text);
        } else {
          Alert.alert('Error in SAVING');
        }
        // route.params._refresh();
        // navigation.goBack();
      })
      .catch(error => {
        console.log(error);
      });
  }

// Get the messages between the sender and receiver
export const getConversation = ( senderId: string, receiverId: string ): Promise<any> => {
  let url = `${config.settings.serverPath}/api/messages/${senderId}/${receiverId}`;

    return fetch(url)
    .then(response => {
      console.log(response);
      if (!response.ok) {
      Alert.alert('Error:', response.status.toString());
      throw Error('Error ' + response.status);
      }
      return response.json();
    })
    .then((messages: any) => {
        console.log(messages);
        return messages;
    })
    .catch(error => {
        console.log(error);
    });
}


// Get the latest message from a conversation
// Get message by ID
export const getLatestMessageBetween = ( senderId: string, receiverId: string ): Promise<any> => {

  let url = `${config.settings.serverPath}/api/latest-message/${senderId}/${receiverId}`;

  return fetch(url)
    .then(response => {
        if (!response.ok) {
          Alert.alert('Error: ' + response.status.toString());
          throw Error('Error fetching student data');
        }
        return response.json();
    })
    .then((message: any) => {
        return message;
    })
    .catch((error: any) => {
        console.error(error);
    });
}

// get Chatlist for a single user
export const getChatlist = ( userId: string ): Promise<any> => {

  let url = `${config.settings.serverPath}/api/chatlist/${userId}`;

  return fetch(url)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        Alert.alert('Error: ' + response.status.toString());
        throw Error('Error fetching chatlist');
      }
      return response.json();
    })
    .then((messages: any) => {
        return messages;
    })
    .catch((error: any) => {
        console.error(error);
    });
}



// // Get the last message
// export const getLatestMessages = async (): Promise<any[]> => {
//   const url = config.settings.serverPath + '/api/messages';

//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Error ' + response.status);
//     const messages = await response.json();

//     // Group messages by sender_id and receiver_id
//     const groupedMessages = messages.reduce((acc: any, msg: any) => {
//       const conversationKey = `${msg.sender_id}-${msg.receiver_id}`;
//       if (!acc[conversationKey]) {
//         acc[conversationKey] = [];
//       }
//       acc[conversationKey].push(msg);
//       return acc;
//     }, {});

//     // Now, return the latest message from each conversation
//     const latestMessages = Object.keys(groupedMessages).map((key) => {
//       const msgs = groupedMessages[key];
//       const lastMessage = msgs.reduce((latest: any, current: any) => {
//         return new Date(current.created_at) > new Date(latest.created_at) ? current : latest;
//       });
//       return {
//         conversationKey: key,
//         lastMessage: lastMessage,
//       };
//     });

//     return latestMessages;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };