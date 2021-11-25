import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Ex12() {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "stretch" }}>
          <View style={{width: 150,  backgroundColor: '#50E3C2'}} />
      <View style={{width: 150,  backgroundColor: '#4A90E2'}} />
        <View style={{width: 150,  backgroundColor: '#9013FE'}} />
    </View>
  );
}