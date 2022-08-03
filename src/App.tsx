import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import HomeScreen from 'screens/HomeScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
