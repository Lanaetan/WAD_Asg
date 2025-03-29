import React from 'react';
import { View, TouchableOpacity, LogBox } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// Ignore specific warning logs
LogBox.ignoreLogs(['EventEmitter.removeListener']);

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChatListScreen from '../screens/ChatListScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: 'whitesmoke'},
        }}>
          <Stack.Screen name='Main' component={MainTabNavigator} options={{ headerShown: false}}/>
          <Stack.Screen name='Chat' component={ChatScreen}/>

        </Stack.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //   <Tab.Navigator
      //     initialRouteName={'HomeScreen'}
      //     screenOptions={{
      //       tabBarActiveTintColor: 'black',
      //       tabBarShowLabel: false,
      //       tabBarStyle: {
      //         backgroundColor: 'white', 
      //         height: 60,              
      //         borderTopWidth: 1,        
      //         borderTopColor: '#ccc',   
      //       },
      //     }}
      //     >
      //     <Tab.Screen
      //       name="HomeScreen"
      //       component={HomeScreen}
      //       options={({ navigation }) => ({
      //         headerTitle: 'For you',
      //         headerRight: () => (
      //           <View style={{ flexDirection: 'row', gap: 25, marginRight: 15 }}>
      //             <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
      //               <Ionicons name="notifications-outline" size={24} color="black" />
      //             </TouchableOpacity>
      //             <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
      //               <Feather name="message-circle" size={24} color="black" />
      //             </TouchableOpacity>
      //           </View>
      //         ),
      //         tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
      //       })}
      //     />
      //     <Tab.Screen
      //       name="NotificationScreen"
      //       component={NotificationScreen}
      //       options={{
      //         headerTitle: 'Notification',
      //         headerTitleStyle: {
      //           // fontFamily: "PTSans-Bold",
      //         },
      //         tabBarIcon: ({ color }) => {
      //           return <Ionicons name="notifications-outline" size={24} color={color} />;
      //         },
      //       }}
      //     />
      //     <Tab.Screen
      //       name="ChatListScreen"
      //       component={ChatListScreen}
      //       options={{
      //         headerTitle: 'Chat',
      //         headerTitleStyle: {
      //           // fontFamily: "PTSans-Bold",
      //         },
      //         tabBarIcon: ({ color }) => {
      //           return <Feather name="message-circle" size={24} color={color} />;
      //         },
      //       }}
      //     />
      //     <Tab.Screen
      //       name="CreatePostScreen"
      //       component={CreatePostScreen}
      //       options={{
      //         headerTitle: 'Create post',
      //         headerTitleStyle: {
      //           // fontFamily: "PTSans-Bold",
      //         },
      //         tabBarIcon: ({ color }) => {
      //           return <Feather name="plus-square" size={24} color={ color } />;
      //         },
      //       }}
      //     />
      //     <Tab.Screen
      //       name="ProfileScreen"
      //       component={ProfileScreen}
      //       options={{
      //         headerTitle: 'Profile',
      //         headerTitleStyle: {
      //           // fontFamily: "PTSans-Bold",
      //         },
      //         tabBarIcon: ({ color }) => {
      //           return <Feather name="user" size={24} color={ color } />;
      //         },
      //       }}
      //     />
      //   </Tab.Navigator>
      // </NavigationContainer>
    );
}

export default Navigator;