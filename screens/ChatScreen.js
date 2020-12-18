import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from '../stylesheet'

export default function ChatScreen({navigation}){

  const goToLogin=()=>{
    navigation.navigate("login")
  }


    return(
      <View>
        <TouchableOpacity onPress={goToLogin}>
          <Text>
              GoBack {count}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
