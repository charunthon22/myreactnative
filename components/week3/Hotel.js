import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,Button,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Hotel() {
    return (        
        <View style={{ flex: 1,padding: 50}}>
            <View style={{flexDirection:"row"}}>
                <Image style={{flex:1,resizeMode:"cover", aspectRatio:6/3, borderRadius:20}} 
                source= {require("../../assets/week3/room-1.jpg")}/>
             </View>
            <View style={{flexDirection:"row",marginTop:20}}>
                <FontAwesome name="map-marker"  size={20} color="red" />
                <Text style={{fontSize:14,paddingLeft:5,color:'#BEBEBE'}}>553 Cislason Radial</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10}}>
                <Text style={{fontSize:20,color:'#000000'}}>Boston Hotel</Text>
            </View>
            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                    <FontAwesome name="star" size= {12}  color="yellow" />
                    <FontAwesome name="star" size= {12}  color="yellow" />
                    <FontAwesome name="star" size= {12}  color="yellow" />
                    <FontAwesome name="star" size= {12}  color="yellow" />
                    <FontAwesome name="star-half" size= {12}  color="yellow" />
                </View>
                <View>
                    <Text style={{fontSize:14,color:'#BEBEBE'}}>100 reviews</Text>
                </View>
            </View>
            <View style={{marginTop:10}}>
                <Text style={{fontSize:20,color:'#FF0000'}}>$125</Text>
            </View>
        </View>
    );
}