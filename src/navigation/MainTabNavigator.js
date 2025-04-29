import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
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
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          headerTitle: "Chat",
          headerTitleStyle: {
            // fontFamily: "PTSans-Bold",
          },
          headerRight: () => (
            <Feather
              onPress={() => navigation.navigate("Contacts")}
              name="plus" // entypo: new-message icon
              size={24}
              color="black"
              style={{ marginRight: 15 }}
            />
          ),
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={24} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: 'For you',
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 25, marginRight: 15 }}>
              <Ionicons
                onPress={() => navigation.navigate("Notifications")}
                name="notifications-outline"
                size={24}
                color="black"
              />
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