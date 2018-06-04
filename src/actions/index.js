import {
  SET_FOCUS,
  RESET_FOCUS,
  UPDATE_USER_NARRATIVE,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE
} from './types';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:5000';

export function setFocus(skill) {
  return { type: SET_FOCUS, payload: skill }
}

export function resetFocus(skill) {
  return { type: RESET_FOCUS}
}

export function updateUserNarrative(object) {
  return { type: UPDATE_USER_NARRATIVE, payload: object }
}

export function signupUser({email, password}) {
  console.log('signupuser', email, password)
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(({response}) => {
        // ran into issue here where, to get to the error on the object returned
        // by catch, you have to use response.response.data.error
        dispatch(authError(response.data.error))
      });
  };
}

export function signinUser({email, password}) {
  // redux thunk requires the return of a function with dispatch as an argument
  // this grants us direct access to send actions to it (the dispatch)
  console.log('signinuser', email, password)
  return function(dispatch){
    // submit email password to the server
    // {email, password} equivalent to {email: email, password: password}
    axios.post(`${ROOT_URL}/users/login`, { email, password })
      .then(response => {
        // if request is good...
        // - Update state to indicate user is authenticated -> simple true or false flag
        dispatch({ type: AUTH_USER });
        // - save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/admin');
      })
      .catch(() => {
        // if request is bad..
        // - show an error to the user
        dispatch(authError('Bad login info'));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
}
