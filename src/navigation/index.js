import React from 'react';
import { View, LogBox } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Ignore specific warning logs
LogBox.ignoreLogs(['EventEmitter.removeListener']);

// Import Screens
import NotificationScreen from '../screens/NotificationScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: 'whitesmoke'},
        }}>
          <Stack.Screen name='Main' component={MainTabNavigator} options={{ headerShown: false}}/>
          <Stack.Screen name='Notifications' component={NotificationScreen}/>
          <Stack.Screen name='Chat' component={ChatScreen}/>
          <Stack.Screen name='Contacts' component={ContactsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigator;