import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput,Button,Image } from 'react-native';


export default function Card() {
    return (        
        <View style={{ flex: 1, flexDirection: 'column'}}>
            <View style={{flexDirection:"row",padding: 25}}>
                <Image style={{borderRadius:100,width:50,height:50 }} 
                source= {require("../../assets/week3/profile-2.jpg")}/>
                <View style={{paddingLeft:10}}>
                    <Text style={{fontSize:18}}>Steve Garrett</Text>   
                    <Text style={{fontSize:10,color:'#BEBEBE'}}>5 hours ago | 100k viewst</Text> 
                </View> 
            </View>
            <View style={{flexDirection:"row"}}>
                <Image style={{flex:1,padding:10,resizeMode:"cover", aspectRatio:5/2 }} 
                source= {require("../../assets/week3/trip-2.jpg")}/>
            </View>
            <View style={{padding:10}}>
                    <Text style={{fontSize:18}}>Overseas Adventure Travel In Nepal</Text>   
                    <Text style={{fontSize:10,color:'#696969'}}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
            </View>
        </View>
    );
}