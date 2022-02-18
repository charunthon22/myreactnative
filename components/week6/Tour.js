import { StatusBar } from "expo-status-bar";
import React from "react";
import { View,Text,ScrollView,Image } from "react-native";

export default function Tour(props) {
    return (
        <View style={props.style}>
            <Text style={{fontSize:16,color: 'gray'}}>Tour</Text>
            <Text style={{ marginVertical: 10,color: 'gray'}}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} >
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg'}}style={{width: 200, height: 100,borderRadius: 10}} />
                        <View style={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                            <Text style={{fontSize:16,color: 'gray'}}>Tour in Somewhere</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg'}}style={{width: 200, height: 100,borderRadius: 10}} />
                        <View style={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                            <Text style={{fontSize:16,color: 'gray'}}>Tour in Somewhere</Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg'}}style={{width: 200, height: 100,borderRadius: 10}} />
                        <View style={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                            <Text style={{fontSize:16,color: 'gray'}}>Tour in Somewhere</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}