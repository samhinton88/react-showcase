import { UPDATE_USER_NARRATIVE } from '../actions/types';

const initState = []


export default function(state = { userNarrative: initState }, action) {
  switch (action.type) {
    case UPDATE_USER_NARRATIVE:
      return {
        ...state,
        userNarrative: [...state.userNarrative, action.payload]
      }
  }
  return state;
}
