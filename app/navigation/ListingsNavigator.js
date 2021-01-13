import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingsDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListingsList" component={ListingsScreen}></Stack.Screen>
    <Stack.Screen
      name="ListingsDetails"
      component={ListingsDetailsScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default ListingsNavigator;
