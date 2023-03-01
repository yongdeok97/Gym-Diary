import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GymNavigation from './GymNavigation';
import CheckNavigation from './CheckNavigation';


const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Gym" component={GymNavigation} />
      <Drawer.Screen name="Check" component={CheckNavigation} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
