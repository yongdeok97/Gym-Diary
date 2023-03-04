import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import GymNavigation from './GymNavigation';
import CheckNavigation from './CheckNavigation';
import styled from 'styled-components'
import {LogOut} from '../assets/components/Auth'
import { useDispatch } from 'react-redux';

const Dummy = styled.View`
  background-color: #D8D8D8;
`

function CustomDrawerContent(props) {

  // const dispatch = useDispatch()
  // dispatch({type: 'logout'});
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Dummy>
        <DrawerItem label="𓉞   Logout" onPress={() => {
          LogOut(props),
          dispatch({type: 'logout'})
        }} />
      </Dummy>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* <Icon></Icon> */}
      <Drawer.Screen name="Gym" component={GymNavigation} 
      />
      <Drawer.Screen name="Check" component={CheckNavigation} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
