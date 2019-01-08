//npm import
import { combineReducers } from 'redux';

//local import
import categories from './categories';
import pages from './pages';
import posts from './posts';

const rootReducer = combineReducers({
  categories,
  pages,
  posts
})

export default rootReducer;