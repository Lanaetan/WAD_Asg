import React from "react";
import {StatusBar, StyleSheet, Text,View} from "react-native";
import ChatListItem from '../assets/components/ChatListItem'
import ChatScreen from './ChatScreen';

const App = () => {
    return(
        <View style={styles.container}>
            <ChatScreen />

            {/* <StatusBar style="auto" /> */}
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