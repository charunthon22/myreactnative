import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Travel";
import Resort from "../components/week3/Resort";
import Health from "../screens/week5/TotalHealth";
import Book from "../screens/week9/Book";
import BookDetail from "../screens/week9/BookDetail";
import BookForm from "../screens/week9/BookForm";
import Location from "../screens/week11/Location";
import LocationQuiz from "../screens/week11/LocationQuiz";
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="Travel" component={Travel} options={{ title : "Travel" }}  />
      <Stack.Screen name="Resort" component={Resort} options={{ title : "Resort" }}  />
      <Stack.Screen name="Health" component={Health} options={{ title : "Health" }}  />
      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookForm}   />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LocationQuiz" component={LocationQuiz} />
    </Stack.Navigator>
  );
}