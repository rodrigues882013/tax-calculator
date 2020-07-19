import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import LandingPage from './pages/landing-page';

const Stack = createStackNavigator();

const App = () => 
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Lading Page" component={LandingPage} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>

export default App;