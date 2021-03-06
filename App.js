import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import Ex1 from './screens/week2/Ex1';
import Ex2 from './screens/week2/Ex2';
import Ex3 from './screens/week2/Ex3';
import Ex4 from './screens/week2/Ex4';
import Ex5 from './screens/week2/Ex5';
import Ex6 from './screens/week2/Ex6';
import Ex7 from './screens/week2/Ex7';
import Ex8 from './screens/week2/Ex8';
import Ex9 from './screens/week2/Ex9';
import Ex10 from './screens/week2/Ex10';
import Ex11 from './screens/week2/Ex11';
import Ex12 from './screens/week2/Ex12';
import Home from './screens/week6/Home';
export default function App() {
  return (
    <NavigationContainer>
            {/* <HomeStack /> */}
            {/* <BottomTab /> */}
            <RootStack />
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
