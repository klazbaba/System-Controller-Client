import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import HomeScreen from 'screens/HomeScreen';

export type AppStackParamList = {
  HomeScreen: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
