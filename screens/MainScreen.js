import React, {useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen'

const Stack = createStackNavigator()

export default function MainScreen(){

    useEffect(() => {
        console.log('main')
    },)

    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginScreen}/>
        </Stack.Navigator>
    )
}
