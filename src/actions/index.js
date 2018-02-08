import {
  SET_FOCUS,
  RESET_FOCUS
} from './types';

export function setFocus(skill) {
  return { type: SET_FOCUS, payload: skill }
}

export function resetFocus(skill) {
  return { type: RESET_FOCUS}
}
