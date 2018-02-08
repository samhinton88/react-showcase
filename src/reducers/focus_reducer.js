import {
  SET_FOCUS,
  RESET_FOCUS
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case SET_FOCUS:
      return { ...state, focusedSkill: action.payload };

    case RESET_FOCUS:
      return { ...state, focusedSkill: null }
  }

  return state
}
