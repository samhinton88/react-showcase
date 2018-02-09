import { UPDATE_USER_NARRATIVE } from '../actions/types';

const initState = [
  {id: 1, skillName: 'Rails', color: '#a2282d', tagLine: 'Rapid prototyping in eloquent Ruby'},
  {id: 2, skillName: 'MongoDB', color: '#479949', tagLine: 'NoSQL magic'},

  {id: 3, skillName: 'Express', color: '#f6dd3b', tagLine: 'RESTful servers and summer strolls'}
]


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
