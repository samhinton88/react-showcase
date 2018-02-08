import { SET_FOCUS } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_FOCUS:
      console.log('inside reducer with ', action)
      return { ...state, focusedSkill: action.payload };
  }

  return state
}
