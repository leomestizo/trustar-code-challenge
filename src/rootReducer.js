import { combineReducers } from 'redux';

import projectReducer from 'core/projects/reducer';

const rootReducer = combineReducers({
  projects: projectReducer,
});

export default rootReducer;
