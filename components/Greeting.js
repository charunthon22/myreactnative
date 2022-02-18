import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Greeting (props){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello{props.name}!</Text>
      </View>
    );
}