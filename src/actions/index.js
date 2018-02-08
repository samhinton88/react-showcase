import {
  SET_FOCUS,
  RESET_FOCUS,
  UPDATE_USER_NARRATIVE
} from './types';

export function setFocus(skill) {
  return { type: SET_FOCUS, payload: skill }
}

export function resetFocus(skill) {
  return { type: RESET_FOCUS}
}

export function updateUserNarrative(object) {
  return { type: UPDATE_USER_NARRATIVE, payload: object }
}
