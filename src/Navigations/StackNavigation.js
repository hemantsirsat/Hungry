import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from '../Screen/RecipeDetails';
import HomeScreen from '../Screen/HomeScreen';
import InDetail from '../Screen/InDetail';
import RecipeList from '../Screen/RecipeList';
import MyRecipe from '../Screen/MyRecipe';

const Stack = createStackNavigator();

export default function HomeScreenNavigation () {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown:false,
              // headerTitle:false,
              // headerTransparent:true,
              // headerTintColor:'#fff',
              // headerLeftContainerStyle:{
              //   backgroundColor:'rgba(0,0,0,0.3)',
              //   borderRadius:100,
              //   marginLeft:15,
              //   marginTop:10,
              // }
          }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecipeList" component={RecipeList} />
        <Stack.Screen name="Recipe" component={RecipeDetails} />
        <Stack.Screen name="InDetail" component={InDetail} />
        <Stack.Screen name="MyRecipe" component={MyRecipe}/>    
      </Stack.Navigator>
  );
}
