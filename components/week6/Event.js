import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, FlatList, Dimensions  } from "react-native";

export default function Event(props) {    
    const event = [
        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
    ]
    return (
        <View style={props.style}>
            <Text style={{fontSize:20,color: 'black'}}>Upcoming Event</Text>
            <Text style={{ marginVertical: 10,color: 'gray'}}>What's the Worst That Could Happend</Text>
            <FlatList
            horizontal={true}
            data={event}
            renderItem={({ item, index }) => {
            console.log(item, index, item.uri);
            return (
            <View style={{marginRight : 10 }}>
              <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 2.0 - 25, height: 150, borderTopLeftRadius: 10, borderTopRightRadius:10 }} />
                    <View style={{flexDirection: 'row', borderBottomLeftRadius:10 , borderBottomRightRadius:10 ,  borderWidth:0.5 , borderColor: 'red'}}>
                        <View style={{padding:10}}>
                            <Text style={{fontSize:12,color:"red",textAlign:'left'}}>{item.month}</Text>
                            <Text style={{fontSize:11,color:"gray",textAlign:'center'}}>{item.date}</Text>
                        </View>
                        <View style={{padding:10}}>
                            <Text style={{fontSize:12,color:"black"}}>{item.title}</Text>
                            <Text style={{fontSize:10,color:"gray"}}>{item.datetime}</Text>
                            <Text style={{fontSize:10,color:"gray"}}>{item.place}</Text>
                        </View>
                    </View>
            </View> 
          ); 
        }}
            keyExtractor={(item) => item.id}
        />
        </View>
    );
}