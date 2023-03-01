import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckScreenDay from '../screens/CheckScreenDay';
import RecordScreen from '../screens/RecordScreen';

const Stack = createStackNavigator();

function CheckNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="CheckScreenDay" component={CheckScreenDay} />
    </Stack.Navigator>
  );
}

export default CheckNavigation;
