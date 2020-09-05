import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/home';
import OnBoarding from './pages/onboarding';
import Result from './pages/result';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
