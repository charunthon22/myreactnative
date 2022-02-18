import React, { useState } from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
export default function Heartbeat() {
    const [count, setCount] = useState(0);
    const onPressButton = () =>{
        let output = count+1;
        setCount(output);
    }
    return (
        <View>
            <View style={{flexDirection:'row', padding:30,alignContent:"space-around",justifyContent:"flex-start"}}>
                <TouchableOpacity onPress={onPressButton}>
                    <FontAwesome name="heart" size={50} color='gold'/>
                </TouchableOpacity>
                <Text style={{marginLeft:50,fontSize:35}}>{count}</Text>
            </View>     
        </View>
    );
}