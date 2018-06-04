import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';

import Root from './components/Root';

import {AUTH_USER} from './actions/types';
console.log("reducers",reducers)



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
  <Root store={store} />,
  document.querySelector('.container')
);
