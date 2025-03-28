import React from "react";
import {Text,View} from "react-native";
import ChatListItem from '../assets/components/ChatListItem'

const App = () => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ChatListItem />
            <ChatListItem />
        </View>

    )
}

export default App;