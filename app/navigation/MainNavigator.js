import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingsEditScreen from "../screens/ListingEditScreen";
import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import colours from "../config/colours";
import AppButton from "../components/AppButton";
import TabBarButton from "./TabBarButton";

const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: colours.medium,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={ListingsNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ListingsEdit"
          component={ListingsEditScreen}
          options={{ tabBarButton: () => <TabBarButton /> }}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
