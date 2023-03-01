import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TimeScreen from '../screens/TimeScreen';
import CheckScreen from '../screens/CheckScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import CheckScreenDay from '../screens/CheckScreenDay';
import RecordScreen from '../screens/RecordScreen';
import LoginScreen from '../screens/LoginScreen'
import MembershipScreen from '../screens/MembershipScreen';


const Stack = createStackNavigator();

function GymNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="MembershipScreen" component={MembershipScreen} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TimeScreen" component={TimeScreen} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      <Stack.Screen name="CheckScreen" component={CheckScreen} />
      <Stack.Screen name="RecordScreen" component={RecordScreen} />
      <Stack.Screen name="CheckScreenDay" component={CheckScreenDay} />
    </Stack.Navigator>
  );
}

export default GymNavigation;
