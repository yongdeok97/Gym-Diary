import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const intialState = {email: ''};

function reducer(currentState, action) {
  if (action.type === 'login') {
    if (currentState.email === '') {
      return {
        ...currentState,
        email: currentState.email + action.step,
      };
    } else return {...currentState};
  }
  if (action.type === 'logout') {
    return {
      ...currentState,
        email: '',
    };
  }
  const newState = {...currentState};
  return newState;
}
const store = createStore(reducer, intialState);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
