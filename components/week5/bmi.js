import React, { useState } from "react";
import {View,Text,TextInput,Button,TouchableOpacity} from "react-native";
import { out } from "react-native/Libraries/Animated/Easing";
export default function Bmi() {
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");
  const [bmi, setBmi] = useState("0");
  const [lh, setLh] = useState("รอคำนวณ");
  console.log("STATE : ", weight, height, bmi, lh);
  const onPressButton = () => {
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));
    let bmistatus = "";
    if (output<18.5)
        bmistatus ="ต่ำเกิน";
    else if (output>=18.5 && output<=24.99)
        bmistatus ="ปานกลาง";
    else if (output>=25 && output<=29.99)
        bmistatus ="มาก";
    else if (output>=30 && output<=39.99)
        bmistatus ="มากเกินไป";
    else
        bmistatus ="ลองใหม่";
    setLh(bmistatus);
  };
  return (
    <View>
      <View style={{padding: 20,backgroundColor: "white",borderRadius: 20,height: 150,justifyContent: "space-around",marginTop: 20,}}>
        <Text style={{ fontSize: 20 }}>น้ำหนัก (kg.)</Text>
        <TextInput onChangeText={(newweight) => setWeight(newweight)}
          keyboardType="numeric"
          style={{ fontSize: 20 }}
          placeholder="ป้อนน้ำหนัก"/>
      </View>
      <View style={{padding: 20,backgroundColor: "white",
          borderRadius: 20,height: 150,justifyContent: "space-around",marginTop: 20,}}>
        <Text style={{ fontSize: 20 }}>ส่วนสูง (cm.)</Text>
        <TextInput
          onChangeText={(newheight) => setHeight(newheight)}
          keyboardType="numeric"
          style={{ fontSize: 20 }}
          placeholder="ป้อนส่วนสูง"
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View style={{flex: 1,padding: 20,backgroundColor: "white",borderRadius: 20,height: 150,justifyContent: "center",marginTop: 20,alignItems: "center",marginRight: 10,}}>
          <Text style={{ fontSize: 30 }}>{bmi}</Text>
        </View>
        <View style={{flex: 1,padding: 20,backgroundColor: "white",borderRadius: 20,height: 150,justifyContent: "center",marginTop: 20,alignItems: "center",marginLeft: 10,}}>
          <Text style={{ fontSize: 30 }}>{lh}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={onPressButton}>
          <View
            style={{ padding: 20, backgroundColor: "limegreen", borderRadius: 30 }}>
            <Text style={{ fontSize: 30, textAlign: "center", color: "black" }}>คำนวณ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}