import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from '../Screen/RecipeDetails';
import HomeScreen from '../Screen/HomeScreen';
import InDetail from '../Screen/InDetail';

const Stack = createStackNavigator();

export default function HomeScreenNavigation () {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeDetails} />
      <Stack.Screen name="InDetail" component={InDetail} />      
    </Stack.Navigator>
  );
}
