//npm import
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//local import
import category from './request';
import posts from './posts';

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    category,
    posts
  })
}

export default rootReducer;