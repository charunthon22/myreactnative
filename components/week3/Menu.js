import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,Button,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Hotel() {
    return (
        <View style={{ flex: 1,paddingTop:5}}>       
             <View style={{margin: 5 , padding: 15 , borderRadius: 20 , borderWidth: 1 , borderColor:'#000000'}}>
                    <TextInput placeholder="What're you looking for?" />
                    <View style={{ flexDirection:"row",justifyContent:"space-around",paddingTop:10}}>
                        <FontAwesome name="building" size= {20}  color="red" />
                        <FontAwesome name="map-marker" size= {20}  color="red" />
                        <FontAwesome name="car" size= {20}  color="red" />
                        <FontAwesome name="plane" size= {20}  color="red" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Hotel</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Tour</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Car</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Flight</Text>
                    </View>
                    <View style={{ flexDirection:"row",justifyContent:"space-around",paddingTop:10}}>
                        <FontAwesome name="ship" size= {20}  color="red" />
                        <FontAwesome name="bus" size= {20}  color="red" />
                        <FontAwesome name="star" size= {20}  color="red" />
                        <FontAwesome name="ellipsis-h" size= {20}  color="red" />
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Cruise</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Bus</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>Event</Text>
                        <Text style={{fontSize:14,color:'#BEBEBE'}}>More</Text>
                    </View>
             </View>
        </View>    

    );
}