import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../Screen/About';
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
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="MyRecipe" component={MyRecipe}/> 
      </Stack.Navigator>
  );
}
