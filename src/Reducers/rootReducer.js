//npm import
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

//local import
import category from './request';
import posts from './posts';
import counter from './counter'
import chartData from './chartData';

const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    category,
    posts,
    counter,
    chartData
  })
}

export default rootReducer;