import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/Screen/HomeScreen';
import Trending from './src/Screen/Trending';
import About from './src/Screen/About';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        activeColor="#000"
        shifting={true}  
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          tabBarColor="ffd500"
          options={{
            tabBarLabel: 'Home',
            tabBarColor:"#bee9e8",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Trending} 
          options={{
            tabBarLabel: 'Search',
            tabBarColor:"#62b6cb",
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={24} color={color} />
            )
          }} 
        />
        <Tab.Screen 
          name="About" 
          component={About} 
          options={{
            tabBarLabel: 'About',
            tabBarColor:"#9eb3c2",
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={24} color={color} />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;