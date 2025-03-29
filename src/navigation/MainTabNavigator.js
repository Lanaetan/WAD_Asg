import React from "react";
import {Text,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        // headerStyle: 'whitesmoke',
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'whitesmoke', 
          height: 60,              
          borderTopWidth: 1,        
          borderTopColor: '#ccc',   
        },
      }}
    >
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerTitle: 'Notification',
          headerTitleStyle: {
            // fontFamily: "PTSans-Bold",
          },
          tabBarIcon: ({ color }) => {
            return <Ionicons name="notifications-outline" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          headerTitle: 'Chat',
          headerTitleStyle: {
            // fontFamily: "PTSans-Bold",
          },
          headerRight: () => {
            return <Ionicons name="notifications-outline" size={24} color={'black'} style={{ marginRight: 15 }}/>;
            // new message
          },
          tabBarIcon: ({ color }) => {
            return <Feather name="message-circle" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: 'For you',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 25, marginRight: 15 }}>
              {/* <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
                <Ionicons name="notifications-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
                <Feather name="message-circle" size={24} color="black" />
              </TouchableOpacity> */}
            </View>
          ),
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostScreen}
        options={{
          headerTitle: 'Create post',
          headerTitleStyle: {
            // fontFamily: "PTSans-Bold",
          },
          tabBarIcon: ({ color }) => {
            return <Feather name="plus-square" size={24} color={ color } />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
          headerTitleStyle: {
            // fontFamily: "PTSans-Bold",
          },
          tabBarIcon: ({ color }) => {
            return <Feather name="user" size={24} color={ color } />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;