import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ex11() {
  return <View style={{ flex : 1 , flexDirection:'column',alignItems:'stretch'
}}>
<View style={{height: 500, backgroundColor: '#4A90E2'}} />
<View style={{height: 500, backgroundColor: '#50E3C2'}} />
</View>
}