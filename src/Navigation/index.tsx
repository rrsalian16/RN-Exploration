import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SwipeCard from '@RNExploration/SwipeCard';

import Home from '..';
import {RouteName} from './routes';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName.HOME}>
        <Stack.Screen name={RouteName.HOME} component={Home} />
        <Stack.Screen name={RouteName.SWIPE_CARD} component={SwipeCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RouteName};
export default Navigation;
