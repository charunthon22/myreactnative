import { StatusBar } from "expo-status-bar";
import React, {useEffect,useState} from "react";
import { View,Text,Image,FlatList,Dimensions } from "react-native";
import TourItem from '../../components/week6/TourItem';

export default function TourFlatList(props) {
    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  
    useEffect(() => {
        loadOnlineTours();
    }, []);       
    return (
        <View style={props.style}>
            <Text style={{fontSize:16,color: 'gray'}}>Tour</Text>
            <Text style={{ marginVertical: 10,color: 'gray'}}>Let find out what most interesting things</Text>
            <FlatList
            // horizontal={true}
            horizontal={false}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between'}}
            data={onlineTours}
            renderItem={({ item, index }) => {
            console.log(item, index, item.uri);
            return (
            <View style={{ marginBottom : 10 }}>
              <Image source={{ uri: item.uri }} style={{ width: Dimensions.get("screen").width / 2.0 - 25, height: 150,borderRadius: 10 }} />
                    <View style={{marginTop : -30, height : 30 , width: 200, paddingHorizontal : 10, backgroundColor : 'black', opacity : 0.5, borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                        <Text style={{fontSize:15,color:"white"}}>{item.title}</Text>
                    </View>
            </View> 
            // <TourItem item={item} index={index} />
          ); 
        }}
            keyExtractor={(item) => item.id}
        />
        </View>
    );
}