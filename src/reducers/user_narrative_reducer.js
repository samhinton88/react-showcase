import { UPDATE_USER_NARRATIVE } from '../actions/types';


export default function(state = { userNarrative: [] }, action) {
  switch (action.type) {
    case UPDATE_USER_NARRATIVE:
      return {
        ...state,
        userNarrative: [...state.userNarrative, action.payload]
      }
  }
  return state;
}
