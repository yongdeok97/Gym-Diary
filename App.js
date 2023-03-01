import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigation';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

function reducer(currentState, action)
{
  if (action.type === 'login'){
    return {
      ...currentState, email:currentState.email + action.step
    }
  }
  const newState = {...currentState};
  return newState
}
const intialState = {email: ''}
const store  = createStore(reducer, intialState);

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
