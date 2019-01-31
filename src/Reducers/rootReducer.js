//npm import
import { combineReducers } from 'redux';

//local import
import category from './request';
import posts from './posts';

const rootReducer = combineReducers({
  category,
  posts
})

export default rootReducer;