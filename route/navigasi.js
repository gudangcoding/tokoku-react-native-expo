import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/dashboard/HomeScreen";
import HistoryScreen from "../screens/dashboard/HistoryScreen";
import ProfilScreen from "../screens/dashboard/ProfilScreen";
import WhislistScreen from "../screens/dashboard/WhislistScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const screenOptions = {
    tabBarStyle: {
      height: 60,
      backgroundColor: "#fff",
      borderTopColor: "#ccc",
      borderTopWidth: 1,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      color: "#333",
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Whislist"
        component={WhislistScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
