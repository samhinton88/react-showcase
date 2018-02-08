import { combineReducers } from 'redux';
import focusReducer from './focus_reducer';
import userNarrativeReducer from './user_narrative_reducer';

const rootReducer = combineReducers({
  skill: focusReducer,
  userNarrative: userNarrativeReducer
});

export default rootReducer;
