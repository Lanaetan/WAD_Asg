import React from "react";
import {StatusBar, StyleSheet, Text,View} from "react-native";
import Navigator from './src/navigation';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();
function App() {
    return(
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignupScreen}/>
      </Stack.Navigator>
     </NavigationContainer>
    )
}


export default App;