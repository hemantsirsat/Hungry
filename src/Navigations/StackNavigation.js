import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from '../Screen/RecipeDetails';
import HomeScreen from '../Screen/HomeScreen';

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
    </Stack.Navigator>
  );
}
