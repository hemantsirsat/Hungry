import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/Navigations/TabNavigation';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import SignInScreen from './src/Screen/SignInScreen';
import LoadingScreen from './src/Screen/LoadingScreen';
import firebase from 'firebase';
import { firebaseConfig } from './src/Keys/Config';

firebase.initializeApp(firebaseConfig);
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Loading'
      screenOptions={{
        headerShown:false,
        HeaderTitle:false
      }}
    >
        <Stack.Screen name='Loading' component={LoadingScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name='TabNavigation' component={TabNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
