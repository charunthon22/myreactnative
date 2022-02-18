import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Bmi from '../../components/week5/bmi';
import Heartbeat from '../../components/week5/heartbeat';

export default function TotalHealth() {
    return (        
        <View style={{ flex: 1, padding : 20, backgroundColor: 'skyblue' }}>
            <Bmi />
            <Heartbeat />
        </View>
    );
}