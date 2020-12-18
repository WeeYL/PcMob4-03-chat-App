import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from '../stylesheet'
import firebase from '../DataBase/firebaseDB'

export default function LoginScreen({navigation}){

    const addChat =()=>{
        firebase.firestore().collection("chatApp").add({
            title:"chatting"
        })
    }
    useEffect(() => {
        console.log('login')
    })

    return(
        <View>
            <TouchableOpacity onPress={addChat}>
                <Text>
                Add to Firebase
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("chat")}>
                <Text>
                Go To Chat
                </Text>
            </TouchableOpacity>
            
        </View>
    )
  }