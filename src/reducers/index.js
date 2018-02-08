import { combineReducers } from 'redux';
import focusReducer from './focus_reducer'

const rootReducer = combineReducers({
  skill: focusReducer
});

export default rootReducer;
