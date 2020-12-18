import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen'
import ChatScreen from './screens/ChatScreen'

const Root = createStackNavigator();


export default function App() {

  const [count, setCount] = useState([1,2,3])
  
   return (
    <NavigationContainer>
      <Root.Navigator mode="modal">
        <Root.Screen name="main" component={MainScreen} options={{headerShown:false}}/>
        <Root.Screen name="chat" component={ChatScreen}/>
      </Root.Navigator>
    </NavigationContainer>
  );
}