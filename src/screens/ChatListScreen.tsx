import React from "react";
import {StatusBar, StyleSheet, Text,View} from "react-native";
import ChatListItem from '../components/ChatListItem'
import ChatsScreen from './ChatsScreen';
import ChatScreen from './ChatScreen';
import Navigator from './src/navigation';


const App = () => {
    return(
        <View style={styles.container}>
            <ChatScreen />

            {/* <StatusBar style="auto" /> */}

            {/* COPIED TO APP.TSX */}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // paddingVertical: 50,
  }
})


export default App;