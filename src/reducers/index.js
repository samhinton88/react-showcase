import { combineReducers } from 'redux';
import focusReducer from './focus_reducer';
import userNarrativeReducer from './user_narrative_reducer';
import authReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  skill: focusReducer,
  userNarrative: userNarrativeReducer,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;
