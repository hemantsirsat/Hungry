import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ShoppingList from '../Screen/ShoppingList';
import About from '../Screen/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, Feather } from '@expo/vector-icons';
import HomeScreenNavigation from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();

function TabNavigation () {
  return (
      <Tab.Navigator 
        activeColor="#000"
        shifting={true}  
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreenNavigation} 
          options={{
            tabBarLabel: 'Home',
            tabBarColor:"#a9d6e5",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={ShoppingList} 
          options={{
            tabBarLabel: 'Shop',
            tabBarColor:"#62b6cb",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-list-circle-outline" size={24} color={color} />
            )
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:"#9eb3c2",
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={24} color={color} />
            )
          }} 
        />
      </Tab.Navigator>
  );
}

export default TabNavigation;