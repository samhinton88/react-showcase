import { SET_FOCUS } from './types';

export function setFocus(skill) {
  return { type: SET_FOCUS, payload: skill }
}
